import { useClient } from '../../../api/plural/client/client';
import {
  CreatePullRequestPointerDocument,
  type CreatePullRequestPointerMutation,
  type CreatePullRequestPointerMutationVariables,
} from '../../../api/plural/generated/graphql';
import { GlobalConfig } from '../../../config/global';
import { logger } from '../../../logger';
import type { BranchConfig } from '../../../workers/types';
import type { Issue, Pr } from '../../platform';
import type { PackageDependency } from '../types';
import type { Plural, ServiceDeployment } from './types';

const plural: Plural = {
  async onPullRequestUpdate(config: BranchConfig, pr: Pr | null) {
    logger.debug(`onPullRequestUpdate()`);

    if (!pr) {
      logger.debug('Could not notify Plural API. PR object is null.');
      return;
    }

    const service = config.managerData as ServiceDeployment;
    const attributes = {
      url: getLink(pr),
      title: pr.title,
      labels: pr.labels,
      creator: pr.creator,
      service: {
        name: service.metadata.name,
        namespace: service.metadata.namespace,
      },
      cluster: {
        name: service.spec.clusterRef?.name,
        namespace: service.spec.clusterRef?.namespace,
      },
    };

    const client = useClient(config);
    await client
      .mutate<
        CreatePullRequestPointerMutation,
        CreatePullRequestPointerMutationVariables
      >({
        mutation: CreatePullRequestPointerDocument,
        variables: { attributes },
      })
      .catch((err) => logger.info(err));
  },

  onDependencyDashboardUpdate(
    issue: Issue | null,
    dependencies: Array<PackageDependency<ServiceDeployment>>,
  ) {
    logger.debug(`onDependencyDashboardUpdate()`);

    if (!issue) {
      logger.debug(
        'Could not notify Plural API. Dependency dashboard issue not found.',
      );
      return;
    }

    logger.debug(issue);
    logger.debug(
      dependencies.map((dep) => ({
        depName: dep.depName,
        oldVersion: dep.currentVersion,
        newVersion: dep.newVersion,
        service: dep.managerData,
      })),
    );
  },
};

function getLink(pr: Pick<Pr | Issue, 'url'>): string {
  const platform = GlobalConfig.get('platform');

  switch (platform) {
    case 'github':
    case 'gitlab':
      return pr.url?.toString() ?? '';
  }

  throw new Error(`Unsupported platform: ${platform}`);
}

export { plural };
