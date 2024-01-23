import { logger } from '../../../logger';
import { HelmDatasource } from '../../datasource/helm';
import { parseRepository } from '../helmv3/utils';
import type {
  PackageDependency,
  PackageFile,
  PackageFileContent,
} from '../types';
import { lookupRepository, toResources, toServices } from './matcher';
import type {
  PluralConfig,
  PluralFile,
  PluralResource,
  ServiceDeployment,
} from './types';

function resolveDependencies(
  services: Array<ServiceDeployment>,
): Array<PackageDependency<ServiceDeployment>> {
  return services.map((service) => {
    const result: PackageDependency<ServiceDeployment> = {
      depName: service.spec.helm.chart,
      currentValue: service.spec.helm.version,
      managerData: service,
    };

    const repository = lookupRepository(service);
    if (!repository) {
      result.skipReason = 'no-repository';
      return result;
    }

    return {
      ...result,
      ...parseRepository(result.depName!, repository),
    } as PackageDependency<ServiceDeployment>;
  });
}

function extractPackageFile(
  content: string,
  packageFile: string,
): PackageFileContent<PluralResource> | null {
  logger.debug({ packageFile }, 'plural.extractPackageFile');

  const file: PluralFile = { fileName: packageFile, content };
  const services = toServices(file)?.services;

  if (!services?.length) {
    return null;
  }

  return {
    datasource: HelmDatasource.id,
    deps: resolveDependencies(services),
  };
}

async function extractAllPackageFiles(
  _config: PluralConfig,
  files: string[],
): Promise<Array<PackageFile<PluralResource>> | null> {
  logger.debug('plural.extractAllPackageFiles');

  const resources = await toResources(files);
  return resources
    .filter((resource) => !!resource.services.length)
    .map((resource) => ({
      packageFile: resource.fileName,
      datasource: HelmDatasource.id,
      deps: resolveDependencies(resource.services),
    }));
}

export { extractPackageFile, extractAllPackageFiles };
