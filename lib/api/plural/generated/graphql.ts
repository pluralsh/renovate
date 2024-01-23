/* eslint-disable */
/* prettier-ignore */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * The `DateTime` scalar type represents a date and time in the UTC
   * timezone. The DateTime appears in a JSON response as an ISO8601 formatted
   * string, including UTC timezone ("Z"). The parsed date and time string will
   * be converted to UTC if there is an offset.
   */
  DateTime: { input: string; output: string };
  Json: { input: any; output: any };
  Long: { input: any; output: any };
  Map: { input: Record<string, unknown>; output: Record<string, unknown> };
};

export type AccessToken = {
  __typename?: 'AccessToken';
  audits?: Maybe<AccessTokenAuditConnection>;
  id?: Maybe<Scalars['ID']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  scopes?: Maybe<Array<Maybe<AccessTokenScope>>>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccessTokenAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AccessTokenAudit = {
  __typename?: 'AccessTokenAudit';
  city?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccessTokenAuditConnection = {
  __typename?: 'AccessTokenAuditConnection';
  edges?: Maybe<Array<Maybe<AccessTokenAuditEdge>>>;
  pageInfo: PageInfo;
};

export type AccessTokenAuditEdge = {
  __typename?: 'AccessTokenAuditEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<AccessTokenAudit>;
};

export type AccessTokenConnection = {
  __typename?: 'AccessTokenConnection';
  edges?: Maybe<Array<Maybe<AccessTokenEdge>>>;
  pageInfo: PageInfo;
};

export type AccessTokenEdge = {
  __typename?: 'AccessTokenEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<AccessToken>;
};

export type AccessTokenScope = {
  __typename?: 'AccessTokenScope';
  api: Scalars['String']['output'];
  apis?: Maybe<Array<Scalars['String']['output']>>;
  identifier?: Maybe<Scalars['String']['output']>;
  ids?: Maybe<Array<Scalars['String']['output']>>;
};

export type Account = {
  __typename?: 'Account';
  availableFeatures?: Maybe<AvailableFeatures>;
  delinquentAt?: Maybe<Scalars['DateTime']['output']>;
  grandfatheredUntil?: Maybe<Scalars['DateTime']['output']>;
  subscription?: Maybe<PluralSubscription>;
};

/** a condition that determines whether its configuration is viewable */
export type AddOnConfigCondition = {
  __typename?: 'AddOnConfigCondition';
  /** the field this condition applies to */
  field?: Maybe<Scalars['String']['output']>;
  /** the operation for this condition, eg EQ, LT, GT */
  operation?: Maybe<Scalars['String']['output']>;
  /** the value to apply the condition with, for binary operators like LT/GT */
  value?: Maybe<Scalars['String']['output']>;
};

/** Input configuration for an add-on you can install */
export type AddOnConfiguration = {
  __typename?: 'AddOnConfiguration';
  condition?: Maybe<AddOnConfigCondition>;
  /** a docstring explaining this configuration */
  documentation?: Maybe<Scalars['String']['output']>;
  /** name for this configuration */
  name?: Maybe<Scalars['String']['output']>;
  /** a type for the configuration (should eventually be coerced back to string) */
  type?: Maybe<Scalars['String']['output']>;
  /** the values for ENUM type conditions */
  values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** the specification of a runtime service at a specific version */
export type AddonVersion = {
  __typename?: 'AddonVersion';
  /** checks if this is blocking a specific kubernetes upgrade */
  blocking?: Maybe<Scalars['Boolean']['output']>;
  /** any add-ons this might break */
  incompatibilities?: Maybe<Array<Maybe<VersionReference>>>;
  /** kubernetes versions this add-on works with */
  kube?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** the release page for a runtime service at a version, this is a heavy operation not suitable for lists */
  releaseUrl?: Maybe<Scalars['String']['output']>;
  /** any other add-ons this might require */
  requirements?: Maybe<Array<Maybe<VersionReference>>>;
  /** add-on version, semver formatted */
  version?: Maybe<Scalars['String']['output']>;
};

/** the specification of a runtime service at a specific version */
export type AddonVersionBlockingArgs = {
  kubeVersion: Scalars['String']['input'];
};

/** the specification of a runtime service at a specific version */
export type AddonVersionReleaseUrlArgs = {
  version: Scalars['String']['input'];
};

/** a representation of a bulk operation to be performed on all agent services */
export type AgentMigration = {
  __typename?: 'AgentMigration';
  completed?: Maybe<Scalars['Boolean']['output']>;
  configuration?: Maybe<Scalars['Map']['output']>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AgentMigrationAttributes = {
  configuration?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
};

/** a representation of a kubernetes api deprecation */
export type ApiDeprecation = {
  __typename?: 'ApiDeprecation';
  /** the kubernetes version the replacement api was created in */
  availableIn?: Maybe<Scalars['String']['output']>;
  /** whether you cannot safely upgrade to the next kubernetes version if this deprecation exists */
  blocking?: Maybe<Scalars['Boolean']['output']>;
  /** the component of this deprecation */
  component?: Maybe<ServiceComponent>;
  /** the kubernetes version the deprecation was posted */
  deprecatedIn?: Maybe<Scalars['String']['output']>;
  /** the kubernetes version the api version will be removed and unusable in */
  removedIn?: Maybe<Scalars['String']['output']>;
  /** the api you can replace this resource with */
  replacement?: Maybe<Scalars['String']['output']>;
};

export type Application = {
  __typename?: 'Application';
  configuration?: Maybe<Configuration>;
  cost?: Maybe<CostAnalysis>;
  info?: Maybe<Scalars['String']['output']>;
  license?: Maybe<License>;
  name: Scalars['String']['output'];
  spec: ApplicationSpec;
  status: ApplicationStatus;
};

export type ApplicationDelta = {
  __typename?: 'ApplicationDelta';
  delta?: Maybe<Delta>;
  payload?: Maybe<Application>;
};

export type ApplicationDescriptor = {
  __typename?: 'ApplicationDescriptor';
  description?: Maybe<Scalars['String']['output']>;
  icons?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  links?: Maybe<Array<Maybe<ApplicationLink>>>;
  type: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type ApplicationInfoItem = {
  __typename?: 'ApplicationInfoItem';
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ApplicationLink = {
  __typename?: 'ApplicationLink';
  description?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ApplicationSpec = {
  __typename?: 'ApplicationSpec';
  components?: Maybe<Array<Maybe<Component>>>;
  descriptor: ApplicationDescriptor;
  info?: Maybe<Array<Maybe<ApplicationInfoItem>>>;
};

export type ApplicationStatus = {
  __typename?: 'ApplicationStatus';
  components?: Maybe<Array<Maybe<StatusComponent>>>;
  componentsReady: Scalars['String']['output'];
  conditions?: Maybe<Array<Maybe<StatusCondition>>>;
};

export type Audit = {
  __typename?: 'Audit';
  action: AuditAction;
  actor?: Maybe<User>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
  type: AuditType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum AuditAction {
  Approve = 'APPROVE',
  Cancel = 'CANCEL',
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE',
}

export type AuditConnection = {
  __typename?: 'AuditConnection';
  edges?: Maybe<Array<Maybe<AuditEdge>>>;
  pageInfo: PageInfo;
};

export type AuditEdge = {
  __typename?: 'AuditEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Audit>;
};

export type AuditMetric = {
  __typename?: 'AuditMetric';
  count?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<Scalars['String']['output']>;
};

export enum AuditType {
  Build = 'BUILD',
  Cluster = 'CLUSTER',
  ClusterProvider = 'CLUSTER_PROVIDER',
  Configuration = 'CONFIGURATION',
  DeploymentSettings = 'DEPLOYMENT_SETTINGS',
  GitRepository = 'GIT_REPOSITORY',
  Global = 'GLOBAL',
  Group = 'GROUP',
  GroupMember = 'GROUP_MEMBER',
  Pipeline = 'PIPELINE',
  Pod = 'POD',
  Policy = 'POLICY',
  ProviderCredential = 'PROVIDER_CREDENTIAL',
  Role = 'ROLE',
  Service = 'SERVICE',
  TempToken = 'TEMP_TOKEN',
  User = 'USER',
}

export enum AuthMethod {
  Basic = 'BASIC',
  Ssh = 'SSH',
}

export enum AutoscalingTarget {
  Deployment = 'DEPLOYMENT',
  Statefulset = 'STATEFULSET',
}

export type AvailableFeatures = {
  __typename?: 'AvailableFeatures';
  audits?: Maybe<Scalars['Boolean']['output']>;
  cd?: Maybe<Scalars['Boolean']['output']>;
  databaseManagement?: Maybe<Scalars['Boolean']['output']>;
  userManagement?: Maybe<Scalars['Boolean']['output']>;
  vpn?: Maybe<Scalars['Boolean']['output']>;
};

/** aws node customizations */
export type AwsCloud = {
  __typename?: 'AwsCloud';
  /** custom launch template for your nodes, useful for Golden AMI setups */
  launchTemplateId?: Maybe<Scalars['String']['output']>;
};

export type AwsCloudAttributes = {
  region?: InputMaybe<Scalars['String']['input']>;
};

/** aws specific cloud configuration */
export type AwsCloudSettings = {
  __typename?: 'AwsCloudSettings';
  region?: Maybe<Scalars['String']['output']>;
};

export type AwsNodeCloudAttributes = {
  launchTemplateId?: InputMaybe<Scalars['String']['input']>;
};

export type AwsSettingsAttributes = {
  accessKeyId: Scalars['String']['input'];
  secretAccessKey: Scalars['String']['input'];
};

export type AzureCloudAttributes = {
  location?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  resourceGroup?: InputMaybe<Scalars['String']['input']>;
  subscriptionId?: InputMaybe<Scalars['String']['input']>;
};

/** azure-specific cluster cloud configuration */
export type AzureCloudSettings = {
  __typename?: 'AzureCloudSettings';
  location?: Maybe<Scalars['String']['output']>;
  network?: Maybe<Scalars['String']['output']>;
  resourceGroup?: Maybe<Scalars['String']['output']>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
};

export type AzureSettingsAttributes = {
  clientId: Scalars['ID']['input'];
  clientSecret: Scalars['String']['input'];
  subscriptionId: Scalars['String']['input'];
  tenantId: Scalars['String']['input'];
};

export type BindingAttributes = {
  groupId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type Build = {
  __typename?: 'Build';
  approver?: Maybe<User>;
  changelogs?: Maybe<Array<Maybe<Changelog>>>;
  commands?: Maybe<CommandConnection>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  creator?: Maybe<User>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  repository: Scalars['String']['output'];
  sha?: Maybe<Scalars['String']['output']>;
  status: Status;
  type: BuildType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BuildCommandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type BuildAttributes = {
  message?: InputMaybe<Scalars['String']['input']>;
  repository: Scalars['String']['input'];
  type?: InputMaybe<BuildType>;
};

export type BuildConnection = {
  __typename?: 'BuildConnection';
  edges?: Maybe<Array<Maybe<BuildEdge>>>;
  pageInfo: PageInfo;
};

export type BuildDelta = {
  __typename?: 'BuildDelta';
  delta?: Maybe<Delta>;
  payload?: Maybe<Build>;
};

export type BuildEdge = {
  __typename?: 'BuildEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Build>;
};

export type BuildInfo = {
  __typename?: 'BuildInfo';
  all?: Maybe<Scalars['Int']['output']>;
  failed?: Maybe<Scalars['Int']['output']>;
  queued?: Maybe<Scalars['Int']['output']>;
  running?: Maybe<Scalars['Int']['output']>;
  successful?: Maybe<Scalars['Int']['output']>;
};

export enum BuildType {
  Approval = 'APPROVAL',
  Bounce = 'BOUNCE',
  Config = 'CONFIG',
  Dedicated = 'DEDICATED',
  Deploy = 'DEPLOY',
  Destroy = 'DESTROY',
  Install = 'INSTALL',
}

export type Canary = {
  __typename?: 'Canary';
  canaryDeployment?: Maybe<Deployment>;
  events?: Maybe<Array<Maybe<Event>>>;
  ingress?: Maybe<Ingress>;
  ingressCanary?: Maybe<Ingress>;
  metadata: Metadata;
  primaryDeployment?: Maybe<Deployment>;
  raw: Scalars['String']['output'];
  spec: CanarySpec;
  status: CanaryStatus;
};

export type CanaryAnalysis = {
  __typename?: 'CanaryAnalysis';
  interval?: Maybe<Scalars['String']['output']>;
  maxWeight?: Maybe<Scalars['Int']['output']>;
  stepWeight?: Maybe<Scalars['Int']['output']>;
  stepWeights?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  threshold?: Maybe<Scalars['Int']['output']>;
};

export type CanarySpec = {
  __typename?: 'CanarySpec';
  analysis?: Maybe<CanaryAnalysis>;
  autoscalerRef?: Maybe<TargetRef>;
  ingressRef?: Maybe<TargetRef>;
  provider?: Maybe<Scalars['String']['output']>;
  targetRef?: Maybe<TargetRef>;
};

export type CanaryStatus = {
  __typename?: 'CanaryStatus';
  canaryWeight?: Maybe<Scalars['Int']['output']>;
  conditions?: Maybe<Array<Maybe<StatusCondition>>>;
  failedChecks?: Maybe<Scalars['Int']['output']>;
  iterations?: Maybe<Scalars['Int']['output']>;
  lastTransitionTime?: Maybe<Scalars['String']['output']>;
  phase?: Maybe<Scalars['String']['output']>;
};

export type Certificate = {
  __typename?: 'Certificate';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  raw: Scalars['String']['output'];
  spec: CertificateSpec;
  status: CertificateStatus;
};

export type CertificateSpec = {
  __typename?: 'CertificateSpec';
  dnsNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  issuerRef?: Maybe<IssuerRef>;
  secretName: Scalars['String']['output'];
};

export type CertificateStatus = {
  __typename?: 'CertificateStatus';
  conditions?: Maybe<Array<Maybe<StatusCondition>>>;
  notAfter?: Maybe<Scalars['String']['output']>;
  notBefore?: Maybe<Scalars['String']['output']>;
  renewalTime?: Maybe<Scalars['String']['output']>;
};

export type Changelog = {
  __typename?: 'Changelog';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  repo: Scalars['String']['output'];
  tool: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CloneAttributes = {
  s3AccessKeyId?: InputMaybe<Scalars['String']['input']>;
  s3Endpoint?: InputMaybe<Scalars['String']['input']>;
  s3SecretAccessKey?: InputMaybe<Scalars['String']['input']>;
  s3WalPath?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

export type CloudProviderSettingsAttributes = {
  aws?: InputMaybe<AwsSettingsAttributes>;
  azure?: InputMaybe<AzureSettingsAttributes>;
  gcp?: InputMaybe<GcpSettingsAttributes>;
};

/** the cloud configuration for a cluster */
export type CloudSettings = {
  __typename?: 'CloudSettings';
  aws?: Maybe<AwsCloudSettings>;
  azure?: Maybe<AzureCloudSettings>;
  gcp?: Maybe<GcpCloudSettings>;
};

export type CloudSettingsAttributes = {
  aws?: InputMaybe<AwsCloudAttributes>;
  azure?: InputMaybe<AzureCloudAttributes>;
  gcp?: InputMaybe<GcpCloudAttributes>;
};

/** a representation of a cluster you can deploy to */
export type Cluster = {
  __typename?: 'Cluster';
  /** all api deprecations for all services in this cluster */
  apiDeprecations?: Maybe<Array<Maybe<ApiDeprecation>>>;
  /** a custom credential to use when provisioning this cluster */
  credential?: Maybe<ProviderCredential>;
  /** current k8s version as told to us by the deployment operator */
  currentVersion?: Maybe<Scalars['String']['output']>;
  /** when this cluster was scheduled for deletion */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** a auth token to be used by the deploy operator, only readable on create */
  deployToken?: Maybe<Scalars['String']['output']>;
  /** the distribution of kubernetes this cluster is running */
  distro?: Maybe<ClusterDistro>;
  /** whether the current user can edit this cluster */
  editable?: Maybe<Scalars['Boolean']['output']>;
  /** a short, unique human readable name used to identify this cluster and does not necessarily map to the cloud resource name */
  handle?: Maybe<Scalars['String']['output']>;
  /** internal id of this cluster */
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** whether the deploy operator has been registered for this cluster */
  installed?: Maybe<Scalars['Boolean']['output']>;
  /** the url of the kas server you can access this cluster from */
  kasUrl?: Maybe<Scalars['String']['output']>;
  /** arbitrary json metadata to store user-specific state of this cluster (eg IAM roles for add-ons) */
  metadata?: Maybe<Scalars['Map']['output']>;
  /** human readable name of this cluster, will also translate to cloud k8s name */
  name: Scalars['String']['output'];
  /** list the cached node metrics for a cluster, can also be stale up to 5m */
  nodeMetrics?: Maybe<Array<Maybe<NodeMetric>>>;
  /** list of node pool specs managed by CAPI */
  nodePools?: Maybe<Array<Maybe<NodePool>>>;
  /** list cached nodes for a cluster, this can be stale up to 5m */
  nodes?: Maybe<Array<Maybe<Node>>>;
  /** last time the deploy operator pinged this cluster */
  pingedAt?: Maybe<Scalars['DateTime']['output']>;
  /** if true, this cluster cannot be deleted */
  protect?: Maybe<Scalars['Boolean']['output']>;
  /** the provider we use to create this cluster (null if BYOK) */
  provider?: Maybe<ClusterProvider>;
  /** read policy for this cluster */
  readBindings?: Maybe<Array<Maybe<PolicyBinding>>>;
  /** a custom git repository if you want to define your own CAPI manifests */
  repository?: Maybe<GitRepository>;
  /** a relay connection of all revisions of this service, these are periodically pruned up to a history limit */
  revisions?: Maybe<RevisionConnection>;
  /** fetches a list of runtime services found in this cluster, this is an expensive operation that should not be done in list queries */
  runtimeServices?: Maybe<Array<Maybe<RuntimeService>>>;
  /** whether this is the management cluster itself */
  self?: Maybe<Scalars['Boolean']['output']>;
  /** the service used to deploy the CAPI resources of this cluster */
  service?: Maybe<ServiceDeployment>;
  /** any errors which might have occurred during the bootstrap process */
  serviceErrors?: Maybe<Array<Maybe<ServiceError>>>;
  /** the cloud settings for this cluster (for instance its aws region) */
  settings?: Maybe<CloudSettings>;
  /** the status of the cluster as seen from the CAPI operator, since some clusters can be provisioned without CAPI, this can be null */
  status?: Maybe<ClusterStatus>;
  /** key/value tags to filter clusters */
  tags?: Maybe<Array<Maybe<Tag>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** desired k8s version for the cluster */
  version?: Maybe<Scalars['String']['output']>;
  /** write policy for this cluster */
  writeBindings?: Maybe<Array<Maybe<PolicyBinding>>>;
};

/** a representation of a cluster you can deploy to */
export type ClusterRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A common kubernetes cluster add-on like cert-manager, istio, etc */
export type ClusterAddOn = {
  __typename?: 'ClusterAddOn';
  configuration?: Maybe<Array<Maybe<AddOnConfiguration>>>;
  global?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ClusterAttributes = {
  cloudSettings?: InputMaybe<CloudSettingsAttributes>;
  /** a cloud credential to use when provisioning this cluster */
  credentialId?: InputMaybe<Scalars['ID']['input']>;
  distro?: InputMaybe<ClusterDistro>;
  /** a short, unique human readable name used to identify this cluster and does not necessarily map to the cloud resource name */
  handle?: InputMaybe<Scalars['String']['input']>;
  kubeconfig?: InputMaybe<KubeconfigAttributes>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  nodePools?: InputMaybe<Array<InputMaybe<NodePoolAttributes>>>;
  protect?: InputMaybe<Scalars['Boolean']['input']>;
  providerId?: InputMaybe<Scalars['ID']['input']>;
  readBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
  tags?: InputMaybe<Array<InputMaybe<TagAttributes>>>;
  version?: InputMaybe<Scalars['String']['input']>;
  writeBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
};

/** a single condition struct for various phases of the cluster provisionining process */
export type ClusterCondition = {
  __typename?: 'ClusterCondition';
  lastTransitionTime?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  severity?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ClusterConnection = {
  __typename?: 'ClusterConnection';
  edges?: Maybe<Array<Maybe<ClusterEdge>>>;
  pageInfo: PageInfo;
};

export enum ClusterDistro {
  Aks = 'AKS',
  Eks = 'EKS',
  Generic = 'GENERIC',
  Gke = 'GKE',
  K3S = 'K3S',
  Rke = 'RKE',
}

export type ClusterEdge = {
  __typename?: 'ClusterEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Cluster>;
};

export type ClusterInfo = {
  __typename?: 'ClusterInfo';
  gitCommit?: Maybe<Scalars['String']['output']>;
  gitVersion?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ClusterPing = {
  currentVersion: Scalars['String']['input'];
  distro?: InputMaybe<ClusterDistro>;
};

/** a CAPI provider for a cluster, cloud is inferred from name if not provided manually */
export type ClusterProvider = {
  __typename?: 'ClusterProvider';
  /** the name of the cloud service for this provider */
  cloud: Scalars['String']['output'];
  /** a list of credentials eligible for this provider */
  credentials?: Maybe<Array<Maybe<ProviderCredential>>>;
  /** when the cluster provider was deleted */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** whether the current user can edit this resource */
  editable?: Maybe<Scalars['Boolean']['output']>;
  /** the details of how cluster manifests will be synced from git when created with this provider */
  git: GitRef;
  /** the id of this provider */
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** a human readable name for the provider, globally unique */
  name: Scalars['String']['output'];
  /** the namespace the CAPI resources are deployed into */
  namespace: Scalars['String']['output'];
  /** the repository for the CAPI service itself if customized */
  providerRepository?: Maybe<GitRepository>;
  /** the region names this provider can deploy to */
  regions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** the repository used to serve cluster manifests */
  repository?: Maybe<GitRepository>;
  runtimeServices?: Maybe<Array<Maybe<RuntimeService>>>;
  /** the service of the CAPI controller itself */
  service?: Maybe<ServiceDeployment>;
  /** the kubernetes versions this provider currently supports */
  supportedVersions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** a CAPI provider for a cluster, cloud is inferred from name if not provided manually */
export type ClusterProviderRuntimeServicesArgs = {
  kubeVersion?: InputMaybe<Scalars['String']['input']>;
};

export type ClusterProviderAttributes = {
  cloud?: InputMaybe<Scalars['String']['input']>;
  cloudSettings?: InputMaybe<CloudProviderSettingsAttributes>;
  name: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};

export type ClusterProviderConnection = {
  __typename?: 'ClusterProviderConnection';
  edges?: Maybe<Array<Maybe<ClusterProviderEdge>>>;
  pageInfo: PageInfo;
};

export type ClusterProviderEdge = {
  __typename?: 'ClusterProviderEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<ClusterProvider>;
};

export type ClusterProviderUpdateAttributes = {
  cloudSettings?: InputMaybe<CloudProviderSettingsAttributes>;
  /** if you optionally want to reconfigure the git repository for the cluster provider */
  service?: InputMaybe<ClusterServiceAttributes>;
};

export type ClusterServiceAttributes = {
  git: GitRefAttributes;
  id: Scalars['ID']['input'];
  repositoryId?: InputMaybe<Scalars['ID']['input']>;
};

/** the crd status of the cluster as seen by the CAPI operator */
export type ClusterStatus = {
  __typename?: 'ClusterStatus';
  conditions?: Maybe<Array<Maybe<ClusterCondition>>>;
  controlPlaneReady?: Maybe<Scalars['Boolean']['output']>;
  failureMessage?: Maybe<Scalars['String']['output']>;
  failureReason?: Maybe<Scalars['String']['output']>;
  phase?: Maybe<Scalars['String']['output']>;
};

/** a cluster info data struct */
export type ClusterStatusInfo = {
  __typename?: 'ClusterStatusInfo';
  count?: Maybe<Scalars['Int']['output']>;
  healthy?: Maybe<Scalars['Boolean']['output']>;
};

export type ClusterUpdateAttributes = {
  distro?: InputMaybe<ClusterDistro>;
  /** a short, unique human readable name used to identify this cluster and does not necessarily map to the cloud resource name */
  handle?: InputMaybe<Scalars['String']['input']>;
  /** pass a kubeconfig for this cluster (DEPRECATED) */
  kubeconfig?: InputMaybe<KubeconfigAttributes>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  nodePools?: InputMaybe<Array<InputMaybe<NodePoolAttributes>>>;
  protect?: InputMaybe<Scalars['Boolean']['input']>;
  /** if you optionally want to reconfigure the git repository for the cluster service */
  service?: InputMaybe<ClusterServiceAttributes>;
  tags?: InputMaybe<Array<InputMaybe<TagAttributes>>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type Command = {
  __typename?: 'Command';
  build?: Maybe<Build>;
  command: Scalars['String']['output'];
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  exitCode?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  stdout?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CommandConnection = {
  __typename?: 'CommandConnection';
  edges?: Maybe<Array<Maybe<CommandEdge>>>;
  pageInfo: PageInfo;
};

export type CommandDelta = {
  __typename?: 'CommandDelta';
  delta?: Maybe<Delta>;
  payload?: Maybe<Command>;
};

export type CommandEdge = {
  __typename?: 'CommandEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Command>;
};

export type Component = {
  __typename?: 'Component';
  group: Scalars['String']['output'];
  kind: Scalars['String']['output'];
};

export type ComponentAttributes = {
  content?: InputMaybe<ComponentContentAttributes>;
  group: Scalars['String']['input'];
  kind: Scalars['String']['input'];
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  state?: InputMaybe<ComponentState>;
  synced: Scalars['Boolean']['input'];
  version: Scalars['String']['input'];
};

/** dry run content of a service component */
export type ComponentContent = {
  __typename?: 'ComponentContent';
  /** the inferred desired state of this component */
  desired?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  live?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** the content of a component when visualized in dry run state */
export type ComponentContentAttributes = {
  /** the desired state of a service component as determined from the configured manifests */
  desired?: InputMaybe<Scalars['String']['input']>;
  live?: InputMaybe<Scalars['String']['input']>;
};

export enum ComponentState {
  Failed = 'FAILED',
  Paused = 'PAUSED',
  Pending = 'PENDING',
  Running = 'RUNNING',
}

export type ConfigAttributes = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigMap = {
  __typename?: 'ConfigMap';
  data: Scalars['Map']['output'];
  metadata: Metadata;
  raw: Scalars['String']['output'];
};

export type Configuration = {
  __typename?: 'Configuration';
  helm?: Maybe<Scalars['String']['output']>;
  readme?: Maybe<Scalars['String']['output']>;
  terraform?: Maybe<Scalars['String']['output']>;
};

export type ConfigurationAction = {
  __typename?: 'ConfigurationAction';
  updates?: Maybe<Array<Maybe<PathUpdate>>>;
};

export type ConfigurationCondition = {
  __typename?: 'ConfigurationCondition';
  field?: Maybe<Scalars['String']['output']>;
  operation?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ConfigurationItem = {
  __typename?: 'ConfigurationItem';
  condition?: Maybe<ConfigurationCondition>;
  default?: Maybe<Scalars['String']['output']>;
  documentation?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  optional?: Maybe<Scalars['Boolean']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  validation?: Maybe<ConfigurationValidation>;
};

export type ConfigurationOverlay = {
  __typename?: 'ConfigurationOverlay';
  metadata: Metadata;
  spec: ConfigurationOverlaySpec;
};

export type ConfigurationOverlaySpec = {
  __typename?: 'ConfigurationOverlaySpec';
  documentation?: Maybe<Scalars['String']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  inputType?: Maybe<Scalars['String']['output']>;
  inputValues?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  subfolder?: Maybe<Scalars['String']['output']>;
  updates?: Maybe<Array<Maybe<OverlayUpdate>>>;
};

export type ConfigurationValidation = {
  __typename?: 'ConfigurationValidation';
  message?: Maybe<Scalars['String']['output']>;
  regex?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export enum Conjunction {
  And = 'AND',
  Or = 'OR',
}

export type ConsoleConfiguration = {
  __typename?: 'ConsoleConfiguration';
  byok?: Maybe<Scalars['Boolean']['output']>;
  features?: Maybe<AvailableFeatures>;
  gitCommit?: Maybe<Scalars['String']['output']>;
  gitStatus?: Maybe<GitStatus>;
  isDemoProject?: Maybe<Scalars['Boolean']['output']>;
  isSandbox?: Maybe<Scalars['Boolean']['output']>;
  manifest?: Maybe<PluralManifest>;
  pluralLogin?: Maybe<Scalars['Boolean']['output']>;
  vpnEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type Container = {
  __typename?: 'Container';
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ports?: Maybe<Array<Maybe<Port>>>;
  resources?: Maybe<Resources>;
};

/** the attributes for a container */
export type ContainerAttributes = {
  args?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  env?: InputMaybe<Array<InputMaybe<EnvAttributes>>>;
  envFrom?: InputMaybe<Array<InputMaybe<EnvFromAttributes>>>;
  image: Scalars['String']['input'];
};

/** container env variable */
export type ContainerEnv = {
  __typename?: 'ContainerEnv';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** env from declarations for containers */
export type ContainerEnvFrom = {
  __typename?: 'ContainerEnvFrom';
  configMap: Scalars['String']['output'];
  secret: Scalars['String']['output'];
};

export type ContainerRecommendation = {
  __typename?: 'ContainerRecommendation';
  containerName?: Maybe<Scalars['String']['output']>;
  lowerBound?: Maybe<ContainerResources>;
  name?: Maybe<Scalars['String']['output']>;
  target?: Maybe<ContainerResources>;
  uncappedTarget?: Maybe<ContainerResources>;
  upperBound?: Maybe<ContainerResources>;
};

export type ContainerResources = {
  __typename?: 'ContainerResources';
  cpu?: Maybe<Scalars['String']['output']>;
  memory?: Maybe<Scalars['String']['output']>;
};

/** a shortform spec for job containers, designed for ease-of-use */
export type ContainerSpec = {
  __typename?: 'ContainerSpec';
  args?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  env?: Maybe<Array<Maybe<ContainerEnv>>>;
  envFrom?: Maybe<Array<Maybe<ContainerEnvFrom>>>;
  image: Scalars['String']['output'];
};

export type ContainerState = {
  __typename?: 'ContainerState';
  running?: Maybe<RunningState>;
  terminated?: Maybe<TerminatedState>;
  waiting?: Maybe<WaitingState>;
};

export type ContainerStatus = {
  __typename?: 'ContainerStatus';
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ready?: Maybe<Scalars['Boolean']['output']>;
  restartCount?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<ContainerState>;
};

export type ContextAttributes = {
  buckets?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  configuration: Scalars['Map']['input'];
  domain?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protect?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CostAnalysis = {
  __typename?: 'CostAnalysis';
  cpuCost?: Maybe<Scalars['Float']['output']>;
  cpuEfficiency?: Maybe<Scalars['Float']['output']>;
  efficiency?: Maybe<Scalars['Float']['output']>;
  gpuCost?: Maybe<Scalars['Float']['output']>;
  minutes?: Maybe<Scalars['Float']['output']>;
  networkCost?: Maybe<Scalars['Float']['output']>;
  pvCost?: Maybe<Scalars['Float']['output']>;
  ramCost?: Maybe<Scalars['Float']['output']>;
  ramEfficiency?: Maybe<Scalars['Float']['output']>;
  sharedCost?: Maybe<Scalars['Float']['output']>;
  totalCost?: Maybe<Scalars['Float']['output']>;
};

export type CronJob = {
  __typename?: 'CronJob';
  events?: Maybe<Array<Maybe<Event>>>;
  jobs?: Maybe<Array<Maybe<Job>>>;
  metadata: Metadata;
  raw: Scalars['String']['output'];
  spec: CronSpec;
  status: CronStatus;
};

export type CronSpec = {
  __typename?: 'CronSpec';
  concurrencyPolicy?: Maybe<Scalars['String']['output']>;
  schedule: Scalars['String']['output'];
  suspend?: Maybe<Scalars['Boolean']['output']>;
};

export type CronStatus = {
  __typename?: 'CronStatus';
  active?: Maybe<Array<Maybe<JobReference>>>;
  lastScheduleTime?: Maybe<Scalars['String']['output']>;
};

export type CrossVersionResourceTarget = {
  __typename?: 'CrossVersionResourceTarget';
  apiVersion?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DaemonSet = {
  __typename?: 'DaemonSet';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  pods?: Maybe<Array<Maybe<Pod>>>;
  raw: Scalars['String']['output'];
  spec: DaemonSetSpec;
  status: DaemonSetStatus;
};

export type DaemonSetSpec = {
  __typename?: 'DaemonSetSpec';
  strategy?: Maybe<DeploymentStrategy>;
};

export type DaemonSetStatus = {
  __typename?: 'DaemonSetStatus';
  currentNumberScheduled?: Maybe<Scalars['Int']['output']>;
  desiredNumberScheduled?: Maybe<Scalars['Int']['output']>;
  numberReady?: Maybe<Scalars['Int']['output']>;
};

export type Dashboard = {
  __typename?: 'Dashboard';
  id: Scalars['String']['output'];
  spec: DashboardSpec;
};

export type DashboardGraph = {
  __typename?: 'DashboardGraph';
  format?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  queries?: Maybe<Array<Maybe<DashboardMetric>>>;
};

export type DashboardLabel = {
  __typename?: 'DashboardLabel';
  name: Scalars['String']['output'];
  values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type DashboardMetric = {
  __typename?: 'DashboardMetric';
  legend?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Maybe<MetricResult>>>;
};

export type DashboardSpec = {
  __typename?: 'DashboardSpec';
  description?: Maybe<Scalars['String']['output']>;
  graphs?: Maybe<Array<Maybe<DashboardGraph>>>;
  labels?: Maybe<Array<Maybe<DashboardLabel>>>;
  name?: Maybe<Scalars['String']['output']>;
  timeslices?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type DatabaseVolume = {
  __typename?: 'DatabaseVolume';
  size?: Maybe<Scalars['String']['output']>;
};

export enum Delta {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE',
}

export type Deployment = {
  __typename?: 'Deployment';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  pods?: Maybe<Array<Maybe<Pod>>>;
  raw: Scalars['String']['output'];
  spec: DeploymentSpec;
  status: DeploymentStatus;
};

/** global settings for CD, these specify global read/write policies and also allow for customization of the repos for CAPI resources and the deploy operator */
export type DeploymentSettings = {
  __typename?: 'DeploymentSettings';
  /** the repo to fetch CAPI manifests from, for both providers and clusters */
  artifactRepository?: Maybe<GitRepository>;
  /** policy for creation of new clusters */
  createBindings?: Maybe<Array<Maybe<PolicyBinding>>>;
  /** the repo to fetch the deploy operators manifests from */
  deployerRepository?: Maybe<GitRepository>;
  /** whether you've yet to enable CD for this instance */
  enabled: Scalars['Boolean']['output'];
  /** policy for managing git repos */
  gitBindings?: Maybe<Array<Maybe<PolicyBinding>>>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the way we can connect to your loki instance */
  lokiConnection?: Maybe<HttpConnection>;
  name: Scalars['String']['output'];
  /** the way we can connect to your prometheus instance */
  prometheusConnection?: Maybe<HttpConnection>;
  /** read policy across all clusters */
  readBindings?: Maybe<Array<Maybe<PolicyBinding>>>;
  /** whether the byok cluster has been brought under self-management */
  selfManaged?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** write policy across all clusters */
  writeBindings?: Maybe<Array<Maybe<PolicyBinding>>>;
};

export type DeploymentSettingsAttributes = {
  artifactRepositoryId?: InputMaybe<Scalars['ID']['input']>;
  createBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
  deployerRepositoryId?: InputMaybe<Scalars['ID']['input']>;
  gitBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
  /** connection details for a loki instance to use */
  lokiConnection?: InputMaybe<HttpConnectionAttributes>;
  /** connection details for a prometheus instance to use */
  prometheusConnection?: InputMaybe<HttpConnectionAttributes>;
  readBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
  writeBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
};

export type DeploymentSpec = {
  __typename?: 'DeploymentSpec';
  replicas?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<DeploymentStrategy>;
};

export type DeploymentStatus = {
  __typename?: 'DeploymentStatus';
  availableReplicas?: Maybe<Scalars['Int']['output']>;
  readyReplicas?: Maybe<Scalars['Int']['output']>;
  replicas?: Maybe<Scalars['Int']['output']>;
  unavailableReplicas?: Maybe<Scalars['Int']['output']>;
};

export type DeploymentStrategy = {
  __typename?: 'DeploymentStrategy';
  rollingUpdate?: Maybe<RollingUpdate>;
  type?: Maybe<Scalars['String']['output']>;
};

export type EnvAttributes = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type EnvFromAttributes = {
  configMap: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};

export type Event = {
  __typename?: 'Event';
  action?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  eventTime?: Maybe<Scalars['String']['output']>;
  lastTimestamp?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FileContent = {
  __typename?: 'FileContent';
  content?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
};

/** spec for a job gate */
export type GateJobAttributes = {
  annotations?: InputMaybe<Scalars['Json']['input']>;
  containers?: InputMaybe<Array<InputMaybe<ContainerAttributes>>>;
  labels?: InputMaybe<Scalars['Json']['input']>;
  namespace: Scalars['String']['input'];
  /** if you'd rather define the job spec via straight k8s yaml */
  raw?: InputMaybe<Scalars['String']['input']>;
  serviceAccount?: InputMaybe<Scalars['String']['input']>;
};

/** detailed gate specifications */
export type GateSpec = {
  __typename?: 'GateSpec';
  job?: Maybe<JobGateSpec>;
};

/** a more refined spec for parameters needed for complex gates */
export type GateSpecAttributes = {
  job?: InputMaybe<GateJobAttributes>;
};

export enum GateState {
  Closed = 'CLOSED',
  Open = 'OPEN',
  Pending = 'PENDING',
}

export type GateStatusAttributes = {
  jobRef?: InputMaybe<NamespacedName>;
};

export enum GateType {
  Approval = 'APPROVAL',
  Job = 'JOB',
  Window = 'WINDOW',
}

/** the allowed inputs for a deployment agent gate update */
export type GateUpdateAttributes = {
  state?: InputMaybe<GateState>;
  status?: InputMaybe<GateStatusAttributes>;
};

export type GcpCloudAttributes = {
  network?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};

/** gcp specific cluster cloud configuration */
export type GcpCloudSettings = {
  __typename?: 'GcpCloudSettings';
  network?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type GcpSettingsAttributes = {
  applicationCredentials: Scalars['String']['input'];
};

export type GitAttributes = {
  /** whether to run plural crypto on this repo */
  decrypt?: InputMaybe<Scalars['Boolean']['input']>;
  /** a manually supplied https path for non standard git setups.  This is auto-inferred in many cases */
  httpsPath?: InputMaybe<Scalars['String']['input']>;
  /** a passphrase to decrypt the given private key */
  passphrase?: InputMaybe<Scalars['String']['input']>;
  /** the http password for http authenticated repos */
  password?: InputMaybe<Scalars['String']['input']>;
  /** an ssh private key to use with this repo if an ssh url was given */
  privateKey?: InputMaybe<Scalars['String']['input']>;
  /** the url of this repository */
  url: Scalars['String']['input'];
  /** similar to https_path, a manually supplied url format for custom git.  Should be something like {url}/tree/{ref}/{folder} */
  urlFormat?: InputMaybe<Scalars['String']['input']>;
  /** the http username for authenticated http repos, defaults to apiKey for github */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** a file fetched from a git repository, eg a docs .md file */
export type GitFile = {
  __typename?: 'GitFile';
  content: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export enum GitHealth {
  Failed = 'FAILED',
  Pullable = 'PULLABLE',
}

/** a representation of where to pull manifests from git */
export type GitRef = {
  __typename?: 'GitRef';
  /** the folder manifests live under */
  folder: Scalars['String']['output'];
  /** a general git ref, either a branch name or commit sha understandable by `git checkout <ref>` */
  ref: Scalars['String']['output'];
};

export type GitRefAttributes = {
  folder: Scalars['String']['input'];
  ref: Scalars['String']['input'];
};

/** a git repository available for deployments */
export type GitRepository = {
  __typename?: 'GitRepository';
  /** whether its a http or ssh url */
  authMethod?: Maybe<AuthMethod>;
  /** whether to run plural crypto unlock on this repo */
  decrypt?: Maybe<Scalars['Boolean']['output']>;
  /** whether the current user can edit this repo */
  editable?: Maybe<Scalars['Boolean']['output']>;
  /** the error message if there were any pull errors */
  error?: Maybe<Scalars['String']['output']>;
  /** whether we can currently pull this repo with the provided credentials */
  health?: Maybe<GitHealth>;
  /** the https url for this git repo */
  httpsPath?: Maybe<Scalars['String']['output']>;
  /** internal id of this repository */
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the last successsful git pull timestamp */
  pulledAt?: Maybe<Scalars['DateTime']['output']>;
  /** named refs like branches/tags for a repository */
  refs?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the git url of the repository, either https or ssh supported */
  url: Scalars['String']['output'];
  /** a format string to get the http url for a subfolder in a git repo */
  urlFormat?: Maybe<Scalars['String']['output']>;
};

export type GitRepositoryConnection = {
  __typename?: 'GitRepositoryConnection';
  edges?: Maybe<Array<Maybe<GitRepositoryEdge>>>;
  pageInfo: PageInfo;
};

export type GitRepositoryEdge = {
  __typename?: 'GitRepositoryEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<GitRepository>;
};

export type GitStatus = {
  __typename?: 'GitStatus';
  cloned?: Maybe<Scalars['Boolean']['output']>;
  output?: Maybe<Scalars['String']['output']>;
};

/** a rules based mechanism to redeploy a service across a fleet of clusters */
export type GlobalService = {
  __typename?: 'GlobalService';
  /** the kubernetes distribution to target with this global service */
  distro?: Maybe<ClusterDistro>;
  /** internal id of this global service */
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** a human readable name for this global service */
  name: Scalars['String']['output'];
  /** whether to only apply to clusters with this provider */
  provider?: Maybe<ClusterProvider>;
  /** the service to replicate across clusters */
  service?: Maybe<ServiceDeployment>;
  /** a set of tags to select clusters for this global service */
  tags?: Maybe<Array<Maybe<Tag>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** A reference for a globalized service, which targets clusters based on the configured criteria */
export type GlobalServiceAttributes = {
  /** kubernetes distribution to target */
  distro?: InputMaybe<ClusterDistro>;
  /** name for this global service */
  name: Scalars['String']['input'];
  /** cluster api provider to target */
  providerId?: InputMaybe<Scalars['ID']['input']>;
  /** the cluster tags to target */
  tags?: InputMaybe<Array<InputMaybe<TagAttributes>>>;
};

export type Group = {
  __typename?: 'Group';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GroupAttributes = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  edges?: Maybe<Array<Maybe<GroupEdge>>>;
  pageInfo: PageInfo;
};

export type GroupEdge = {
  __typename?: 'GroupEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Group>;
};

export type GroupMember = {
  __typename?: 'GroupMember';
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type GroupMemberConnection = {
  __typename?: 'GroupMemberConnection';
  edges?: Maybe<Array<Maybe<GroupMemberEdge>>>;
  pageInfo: PageInfo;
};

export type GroupMemberEdge = {
  __typename?: 'GroupMemberEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<GroupMember>;
};

/** a chart manifest entry, including all versions */
export type HelmChartEntry = {
  __typename?: 'HelmChartEntry';
  /** the name of the chart */
  name?: Maybe<Scalars['String']['output']>;
  /** all found versions of the chart */
  versions?: Maybe<Array<Maybe<HelmChartVersion>>>;
};

/** a chart version contained within a helm repository manifest */
export type HelmChartVersion = {
  __typename?: 'HelmChartVersion';
  /** the version of the app contained w/in this chart */
  appVersion?: Maybe<Scalars['String']['output']>;
  /** sha digest of this chart's contents */
  digest?: Maybe<Scalars['String']['output']>;
  /** the name of the chart */
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  /** the version of the chart itself */
  version?: Maybe<Scalars['String']['output']>;
};

export type HelmConfigAttributes = {
  chart?: InputMaybe<Scalars['String']['input']>;
  repository?: InputMaybe<NamespacedName>;
  set?: InputMaybe<HelmValueAttributes>;
  values?: InputMaybe<Scalars['String']['input']>;
  valuesFiles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** a crd representation of a helm repository */
export type HelmRepository = {
  __typename?: 'HelmRepository';
  /** the charts found in this repository (heavy operation, don't do in list endpoints) */
  charts?: Maybe<Array<Maybe<HelmChartEntry>>>;
  metadata: Metadata;
  spec: HelmRepositorySpec;
  /** can fetch the status of a given helm repository */
  status?: Maybe<HelmRepositoryStatus>;
};

/** a specification of how a helm repository is fetched */
export type HelmRepositorySpec = {
  __typename?: 'HelmRepositorySpec';
  provider?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

/** the state of this helm repository */
export type HelmRepositoryStatus = {
  __typename?: 'HelmRepositoryStatus';
  message?: Maybe<Scalars['String']['output']>;
  ready?: Maybe<Scalars['Boolean']['output']>;
};

export type HelmSpec = {
  __typename?: 'HelmSpec';
  /** the name of the chart this service is using */
  chart?: Maybe<Scalars['String']['output']>;
  /** pointer to the flux helm repository resource used for this chart */
  repository?: Maybe<ObjectReference>;
  /** a list of helm name/value pairs to precisely set individual values */
  set?: Maybe<Array<Maybe<HelmValue>>>;
  /** a helm values file to use with this service, requires auth and so is heavy to query */
  values?: Maybe<Scalars['String']['output']>;
  /** a list of relative paths to values files to use for helm applies */
  valuesFiles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** the chart version in use currently */
  version?: Maybe<Scalars['String']['output']>;
};

/** a (possibly nested) helm value pair */
export type HelmValue = {
  __typename?: 'HelmValue';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type HelmValueAttributes = {
  /** helm value name, can be deeply nested via dot like `image.tag` */
  name?: InputMaybe<Scalars['String']['input']>;
  /** value of the attribute */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** the details of how to connect to a http service like prometheus */
export type HttpConnection = {
  __typename?: 'HttpConnection';
  host: Scalars['String']['output'];
  /** password to connect w/ for basic auth */
  password?: Maybe<Scalars['String']['output']>;
  /** user to connect w/ for basic auth */
  user?: Maybe<Scalars['String']['output']>;
};

export type HttpConnectionAttributes = {
  host: Scalars['String']['input'];
  /** password to connect w/ for basic auth */
  password?: InputMaybe<Scalars['String']['input']>;
  /** user to connect w/ for basic auth */
  user?: InputMaybe<Scalars['String']['input']>;
};

export type HttpIngressRule = {
  __typename?: 'HttpIngressRule';
  paths?: Maybe<Array<Maybe<IngressPath>>>;
};

export type Ingress = {
  __typename?: 'Ingress';
  certificates?: Maybe<Array<Maybe<Certificate>>>;
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  raw: Scalars['String']['output'];
  spec: IngressSpec;
  status: ServiceStatus;
};

export type IngressBackend = {
  __typename?: 'IngressBackend';
  serviceName?: Maybe<Scalars['String']['output']>;
  servicePort?: Maybe<Scalars['String']['output']>;
};

export type IngressPath = {
  __typename?: 'IngressPath';
  backend?: Maybe<IngressBackend>;
  path?: Maybe<Scalars['String']['output']>;
};

export type IngressRule = {
  __typename?: 'IngressRule';
  host?: Maybe<Scalars['String']['output']>;
  http?: Maybe<HttpIngressRule>;
};

export type IngressSpec = {
  __typename?: 'IngressSpec';
  ingressClassName?: Maybe<Scalars['String']['output']>;
  rules?: Maybe<Array<Maybe<IngressRule>>>;
  tls?: Maybe<Array<Maybe<IngressTls>>>;
};

export type IngressTls = {
  __typename?: 'IngressTls';
  hosts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Installation = {
  __typename?: 'Installation';
  id: Scalars['ID']['output'];
  repository?: Maybe<Repository>;
};

export type InstallationConnection = {
  __typename?: 'InstallationConnection';
  edges?: Maybe<Array<Maybe<InstallationEdge>>>;
  pageInfo: PageInfo;
};

export type InstallationEdge = {
  __typename?: 'InstallationEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Installation>;
};

export type Invite = {
  __typename?: 'Invite';
  email?: Maybe<Scalars['String']['output']>;
  secureId: Scalars['String']['output'];
};

export type InviteAttributes = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type IssuerRef = {
  __typename?: 'IssuerRef';
  group?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Job = {
  __typename?: 'Job';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  pods?: Maybe<Array<Maybe<Pod>>>;
  raw: Scalars['String']['output'];
  spec: JobSpec;
  status: JobStatus;
};

/** the full specification of a job gate */
export type JobGateSpec = {
  __typename?: 'JobGateSpec';
  /** any pod annotations to apply */
  annotations?: Maybe<Scalars['Map']['output']>;
  /** list of containers to run in this job */
  containers?: Maybe<Array<Maybe<ContainerSpec>>>;
  /** any pod labels to apply */
  labels?: Maybe<Scalars['Map']['output']>;
  /** the namespace the job will run in */
  namespace: Scalars['String']['output'];
  /** a raw kubernetes job resource, overrides any other configuration */
  raw?: Maybe<Scalars['String']['output']>;
  /** the service account the pod will use */
  serviceAccount?: Maybe<Scalars['String']['output']>;
};

export type JobReference = {
  __typename?: 'JobReference';
  name: Scalars['String']['output'];
  namespace: Scalars['String']['output'];
};

export type JobSpec = {
  __typename?: 'JobSpec';
  activeDeadlineSeconds?: Maybe<Scalars['Int']['output']>;
  backoffLimit?: Maybe<Scalars['Int']['output']>;
  parallelism?: Maybe<Scalars['Int']['output']>;
};

export type JobStatus = {
  __typename?: 'JobStatus';
  active?: Maybe<Scalars['Int']['output']>;
  completionTime?: Maybe<Scalars['String']['output']>;
  failed?: Maybe<Scalars['Int']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
  succeeded?: Maybe<Scalars['Int']['output']>;
};

export type KubeconfigAttributes = {
  raw?: InputMaybe<Scalars['String']['input']>;
};

/** supported kubernetes objects fetchable in runbooks */
export type KubernetesData = Deployment | StatefulSet;

export type KubernetesDatasource = {
  __typename?: 'KubernetesDatasource';
  name: Scalars['String']['output'];
  resource: Scalars['String']['output'];
};

export type KubernetesUnstructured = {
  __typename?: 'KubernetesUnstructured';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  raw?: Maybe<Scalars['Map']['output']>;
};

/** metadata needed for configuring kustomize */
export type Kustomize = {
  __typename?: 'Kustomize';
  path: Scalars['String']['output'];
};

export type KustomizeAttributes = {
  /** the path to the kustomization file to use */
  path: Scalars['String']['input'];
};

export type LabelInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type LabelPair = {
  __typename?: 'LabelPair';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type License = {
  __typename?: 'License';
  metadata: Metadata;
  spec: LicenseSpec;
  status?: Maybe<LicenseStatus>;
};

export type LicenseFeature = {
  __typename?: 'LicenseFeature';
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type LicenseSpec = {
  __typename?: 'LicenseSpec';
  secretRef: SecretKeySelector;
};

export type LicenseStatus = {
  __typename?: 'LicenseStatus';
  features?: Maybe<Array<Maybe<LicenseFeature>>>;
  free?: Maybe<Scalars['Boolean']['output']>;
  limits?: Maybe<Scalars['Map']['output']>;
  plan?: Maybe<Scalars['String']['output']>;
  secrets?: Maybe<Scalars['Map']['output']>;
};

export type LoadBalancerIngressStatus = {
  __typename?: 'LoadBalancerIngressStatus';
  hostname?: Maybe<Scalars['String']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
};

export type LoadBalancerStatus = {
  __typename?: 'LoadBalancerStatus';
  ingress?: Maybe<Array<Maybe<LoadBalancerIngressStatus>>>;
};

export type LogFilter = {
  __typename?: 'LogFilter';
  metadata: Metadata;
  spec: LogFilterSpec;
};

export type LogFilterSpec = {
  __typename?: 'LogFilterSpec';
  description?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Array<Maybe<LogLabel>>>;
  name?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Scalars['String']['output']>;
};

export type LogLabel = {
  __typename?: 'LogLabel';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type LogStream = {
  __typename?: 'LogStream';
  stream?: Maybe<Scalars['Map']['output']>;
  values?: Maybe<Array<Maybe<MetricResult>>>;
};

export type LoginInfo = {
  __typename?: 'LoginInfo';
  oidcUri?: Maybe<Scalars['String']['output']>;
};

export type ManifestNetwork = {
  __typename?: 'ManifestNetwork';
  pluralDns?: Maybe<Scalars['Boolean']['output']>;
  subdomain?: Maybe<Scalars['String']['output']>;
};

export enum MatchStrategy {
  All = 'ALL',
  Any = 'ANY',
  Recursive = 'RECURSIVE',
}

export type Metadata = {
  __typename?: 'Metadata';
  annotations?: Maybe<Array<Maybe<LabelPair>>>;
  creationTimestamp?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Array<Maybe<LabelPair>>>;
  name: Scalars['String']['output'];
  namespace?: Maybe<Scalars['String']['output']>;
};

export type MetadataAttributes = {
  annotations?: InputMaybe<Scalars['Json']['input']>;
  labels?: InputMaybe<Scalars['Json']['input']>;
};

export type MetricResponse = {
  __typename?: 'MetricResponse';
  metric?: Maybe<Scalars['Map']['output']>;
  values?: Maybe<Array<Maybe<MetricResult>>>;
};

export type MetricResult = {
  __typename?: 'MetricResult';
  timestamp?: Maybe<Scalars['Long']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Namespace = {
  __typename?: 'Namespace';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  raw: Scalars['String']['output'];
  spec: NamespaceSpec;
  status: NamespaceStatus;
};

/** metadata fields for created namespaces */
export type NamespaceMetadata = {
  __typename?: 'NamespaceMetadata';
  annotations?: Maybe<Scalars['Map']['output']>;
  labels?: Maybe<Scalars['Map']['output']>;
};

export type NamespaceSpec = {
  __typename?: 'NamespaceSpec';
  finalizers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type NamespaceStatus = {
  __typename?: 'NamespaceStatus';
  phase?: Maybe<Scalars['String']['output']>;
};

export type NamespacedName = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
};

export type Node = {
  __typename?: 'Node';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  pods?: Maybe<Array<Maybe<Pod>>>;
  raw: Scalars['String']['output'];
  spec: NodeSpec;
  status: NodeStatus;
};

/** cloud specific settings for a node pool */
export type NodeCloudSettings = {
  __typename?: 'NodeCloudSettings';
  aws?: Maybe<AwsCloud>;
};

export type NodeCondition = {
  __typename?: 'NodeCondition';
  message?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type NodeMetric = {
  __typename?: 'NodeMetric';
  metadata: Metadata;
  timestamp?: Maybe<Scalars['String']['output']>;
  usage?: Maybe<NodeUsage>;
  window?: Maybe<Scalars['String']['output']>;
};

/** a specification for a node pool to be created in this cluster */
export type NodePool = {
  __typename?: 'NodePool';
  /** cloud specific settings for the node groups */
  cloudSettings?: Maybe<NodeCloudSettings>;
  /** internal id for this node pool */
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the type of node to use (usually cloud-specific) */
  instanceType: Scalars['String']['output'];
  /** kubernetes labels to apply to the nodes in this pool, useful for node selectors */
  labels?: Maybe<Scalars['Map']['output']>;
  /** maximum number of instances in this node pool */
  maxSize: Scalars['Int']['output'];
  /** minimum number of instances in this node pool */
  minSize: Scalars['Int']['output'];
  /** name of this node pool (must be unique) */
  name: Scalars['String']['output'];
  /** whether this is a spot pool or not */
  spot?: Maybe<Scalars['Boolean']['output']>;
  /** any taints you'd want to apply to a node, for eg preventing scheduling on spot instances */
  taints?: Maybe<Array<Maybe<Taint>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NodePoolAttributes = {
  cloudSettings?: InputMaybe<NodePoolCloudAttributes>;
  instanceType: Scalars['String']['input'];
  labels?: InputMaybe<Scalars['Json']['input']>;
  maxSize: Scalars['Int']['input'];
  minSize: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  taints?: InputMaybe<Array<InputMaybe<TaintAttributes>>>;
};

export type NodePoolCloudAttributes = {
  aws?: InputMaybe<AwsNodeCloudAttributes>;
};

export type NodeSpec = {
  __typename?: 'NodeSpec';
  podCidr?: Maybe<Scalars['String']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  unschedulable?: Maybe<Scalars['Boolean']['output']>;
};

export type NodeStatus = {
  __typename?: 'NodeStatus';
  allocatable?: Maybe<Scalars['Map']['output']>;
  capacity?: Maybe<Scalars['Map']['output']>;
  conditions?: Maybe<Array<Maybe<NodeCondition>>>;
  phase?: Maybe<Scalars['String']['output']>;
};

export type NodeUsage = {
  __typename?: 'NodeUsage';
  cpu?: Maybe<Scalars['String']['output']>;
  memory?: Maybe<Scalars['String']['output']>;
};

export type Notification = {
  __typename?: 'Notification';
  annotations?: Maybe<Scalars['Map']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fingerprint: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  labels?: Maybe<Scalars['Map']['output']>;
  repository: Scalars['String']['output'];
  seenAt?: Maybe<Scalars['DateTime']['output']>;
  severity?: Maybe<Severity>;
  status?: Maybe<NotificationStatus>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  edges?: Maybe<Array<Maybe<NotificationEdge>>>;
  pageInfo: PageInfo;
};

export type NotificationDelta = {
  __typename?: 'NotificationDelta';
  delta?: Maybe<Delta>;
  payload?: Maybe<Notification>;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Notification>;
};

export enum NotificationStatus {
  Firing = 'FIRING',
  Resolved = 'RESOLVED',
}

export type ObjectReference = {
  __typename?: 'ObjectReference';
  name?: Maybe<Scalars['String']['output']>;
  namespace?: Maybe<Scalars['String']['output']>;
};

export type OverlayUpdate = {
  __typename?: 'OverlayUpdate';
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PathUpdate = {
  __typename?: 'PathUpdate';
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  valueFrom: Scalars['String']['output'];
};

export enum Permission {
  Configure = 'CONFIGURE',
  Deploy = 'DEPLOY',
  Operate = 'OPERATE',
  Read = 'READ',
}

/** a release pipeline, composed of multiple stages each with potentially multiple services */
export type Pipeline = {
  __typename?: 'Pipeline';
  /** edges linking two stages w/in the pipeline in a full DAG */
  edges?: Maybe<Array<Maybe<PipelineStageEdge>>>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the name of the pipeline */
  name: Scalars['String']['output'];
  /** the stages of this pipeline */
  stages?: Maybe<Array<Maybe<PipelineStage>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** the top level input object for creating/deleting pipelines */
export type PipelineAttributes = {
  edges?: InputMaybe<Array<InputMaybe<PipelineEdgeAttributes>>>;
  stages?: InputMaybe<Array<InputMaybe<PipelineStageAttributes>>>;
};

export type PipelineConnection = {
  __typename?: 'PipelineConnection';
  edges?: Maybe<Array<Maybe<PipelineEdge>>>;
  pageInfo: PageInfo;
};

export type PipelineEdge = {
  __typename?: 'PipelineEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Pipeline>;
};

/** specification of an edge between two pipeline stages */
export type PipelineEdgeAttributes = {
  /** the name of the pipeline stage this edge emits from */
  from?: InputMaybe<Scalars['String']['input']>;
  /** stage id the edge is from, can also be specified by name */
  fromId?: InputMaybe<Scalars['ID']['input']>;
  /** any optional promotion gates you wish to configure */
  gates?: InputMaybe<Array<InputMaybe<PipelineGateAttributes>>>;
  /** the name of the pipeline stage this edge points to */
  to?: InputMaybe<Scalars['String']['input']>;
  /** stage id the edge is to, can also be specified by name */
  toId?: InputMaybe<Scalars['ID']['input']>;
};

/** A gate blocking promotion along a release pipeline */
export type PipelineGate = {
  __typename?: 'PipelineGate';
  /** the last user to approve this gate */
  approver?: Maybe<User>;
  /** the cluster this gate can run on */
  cluster?: Maybe<Cluster>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the name of this gate as seen in the UI */
  name: Scalars['String']['output'];
  /** more detailed specification for complex gates */
  spec?: Maybe<GateSpec>;
  /** the current state of this gate */
  state: GateState;
  /** the type of gate this is */
  type: GateType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** will configure a promotion gate for a pipeline */
export type PipelineGateAttributes = {
  /** the handle of a cluster this gate will execute on */
  cluster?: InputMaybe<Scalars['String']['input']>;
  /** the id of the cluster this gate will execute on */
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  /** the name of this gate */
  name: Scalars['String']['input'];
  /** a specification for more complex gate types */
  spec?: InputMaybe<GateSpecAttributes>;
  /** the type of gate this is */
  type: GateType;
};

/** a representation of an individual pipeline promotion, which is a list of services/revisions and timestamps to determine promotion status */
export type PipelinePromotion = {
  __typename?: 'PipelinePromotion';
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the last time this promotion was fully promoted, it's no longer pending if promoted_at > revised_at */
  promotedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the last time this promotion was updated */
  revisedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the services included in this promotion */
  services?: Maybe<Array<Maybe<PromotionService>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** a pipeline stage, has a list of services and potentially a promotion which might be pending */
export type PipelineStage = {
  __typename?: 'PipelineStage';
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the name of this stage (eg dev, prod, staging) */
  name: Scalars['String']['output'];
  /** a promotion which might be outstanding for this stage */
  promotion?: Maybe<PipelinePromotion>;
  /** the services within this stage */
  services?: Maybe<Array<Maybe<StageService>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** specification of a stage of a pipeline */
export type PipelineStageAttributes = {
  name: Scalars['String']['input'];
  services?: InputMaybe<Array<InputMaybe<StageServiceAttributes>>>;
};

/** an edge in the pipeline DAG */
export type PipelineStageEdge = {
  __typename?: 'PipelineStageEdge';
  from: PipelineStage;
  gates?: Maybe<Array<Maybe<PipelineGate>>>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** when the edge was last promoted, if greater than the promotion objects revised at, was successfully promoted */
  promotedAt?: Maybe<Scalars['DateTime']['output']>;
  to: PipelineStage;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Plan = {
  __typename?: 'Plan';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Scalars['String']['output']>;
};

export type PluralCluster = {
  __typename?: 'PluralCluster';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  raw: Scalars['String']['output'];
  reference?: Maybe<Cluster>;
  status: PluralObjectStatus;
};

export type PluralContext = {
  __typename?: 'PluralContext';
  buckets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  configuration: Scalars['Map']['output'];
  domains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PluralGitRepository = {
  __typename?: 'PluralGitRepository';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  raw: Scalars['String']['output'];
  reference?: Maybe<GitRepository>;
  status: PluralObjectStatus;
};

export type PluralManifest = {
  __typename?: 'PluralManifest';
  bucketPrefix?: Maybe<Scalars['String']['output']>;
  cluster?: Maybe<Scalars['String']['output']>;
  network?: Maybe<ManifestNetwork>;
};

export type PluralObjectStatus = {
  __typename?: 'PluralObjectStatus';
  conditions?: Maybe<Array<Maybe<StatusCondition>>>;
  id?: Maybe<Scalars['String']['output']>;
};

export type PluralServiceDeployment = {
  __typename?: 'PluralServiceDeployment';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  raw: Scalars['String']['output'];
  reference?: Maybe<ServiceDeployment>;
  status: PluralObjectStatus;
};

export type PluralSubscription = {
  __typename?: 'PluralSubscription';
  id?: Maybe<Scalars['ID']['output']>;
  plan?: Maybe<Plan>;
};

export type Pod = {
  __typename?: 'Pod';
  events?: Maybe<Array<Maybe<Event>>>;
  logs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metadata: Metadata;
  raw: Scalars['String']['output'];
  spec: PodSpec;
  status: PodStatus;
};

export type PodLogsArgs = {
  container: Scalars['String']['input'];
  sinceSeconds: Scalars['Int']['input'];
};

export type PodCondition = {
  __typename?: 'PodCondition';
  lastProbeTime?: Maybe<Scalars['String']['output']>;
  lastTransitionTime?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PodConnection = {
  __typename?: 'PodConnection';
  edges?: Maybe<Array<Maybe<PodEdge>>>;
  pageInfo: PageInfo;
};

export type PodDelta = {
  __typename?: 'PodDelta';
  delta?: Maybe<Delta>;
  payload?: Maybe<Pod>;
};

export type PodEdge = {
  __typename?: 'PodEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Pod>;
};

export type PodSpec = {
  __typename?: 'PodSpec';
  containers?: Maybe<Array<Maybe<Container>>>;
  initContainers?: Maybe<Array<Maybe<Container>>>;
  nodeName?: Maybe<Scalars['String']['output']>;
  serviceAccountName?: Maybe<Scalars['String']['output']>;
};

export type PodStatus = {
  __typename?: 'PodStatus';
  conditions?: Maybe<Array<Maybe<PodCondition>>>;
  containerStatuses?: Maybe<Array<Maybe<ContainerStatus>>>;
  hostIp?: Maybe<Scalars['String']['output']>;
  initContainerStatuses?: Maybe<Array<Maybe<ContainerStatus>>>;
  message?: Maybe<Scalars['String']['output']>;
  phase?: Maybe<Scalars['String']['output']>;
  podIp?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
};

export type PolicyBinding = {
  __typename?: 'PolicyBinding';
  group?: Maybe<Group>;
  id?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
};

export type PolicyBindingAttributes = {
  groupId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type Port = {
  __typename?: 'Port';
  containerPort?: Maybe<Scalars['Int']['output']>;
  hostPort?: Maybe<Scalars['Int']['output']>;
  protocol?: Maybe<Scalars['String']['output']>;
};

export type PostgresInstance = {
  __typename?: 'PostgresInstance';
  uid: Scalars['String']['output'];
};

export type PostgresSettings = {
  __typename?: 'PostgresSettings';
  version?: Maybe<Scalars['String']['output']>;
};

export type Postgresql = {
  __typename?: 'Postgresql';
  instances?: Maybe<Array<Maybe<PostgresInstance>>>;
  metadata: Metadata;
  spec: PostgresqlSpec;
  status?: Maybe<PostgresqlStatus>;
};

export type PostgresqlSpec = {
  __typename?: 'PostgresqlSpec';
  databases?: Maybe<Scalars['Map']['output']>;
  numberOfInstances?: Maybe<Scalars['Int']['output']>;
  pods?: Maybe<Array<Maybe<Pod>>>;
  postgresql?: Maybe<PostgresSettings>;
  resources?: Maybe<Resources>;
  teamId?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Scalars['Map']['output']>;
  volume?: Maybe<DatabaseVolume>;
};

export type PostgresqlStatus = {
  __typename?: 'PostgresqlStatus';
  clusterStatus?: Maybe<Scalars['String']['output']>;
};

/** a description of how to generate a pr, which can either modify existing files or generate new ones w/in a repo */
export type PrAutomation = {
  __typename?: 'PrAutomation';
  /** link to an add-on name if this can update it */
  addon?: Maybe<Scalars['String']['output']>;
  /** link to a cluster if this is to perform an upgrade */
  cluster?: Maybe<Cluster>;
  /** the scm connection to use for pr generation */
  connection?: Maybe<ScmConnection>;
  /** users who can generate prs with this automation */
  createBindings?: Maybe<Array<Maybe<PolicyBinding>>>;
  documentation?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** string id for a repository, eg for github, this is {organization}/{repository-name} */
  identifier: Scalars['String']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  message: Scalars['String']['output'];
  /** the name for this automation */
  name: Scalars['String']['output'];
  /** link to a service if this can update its configuration */
  service?: Maybe<ServiceDeployment>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updates?: Maybe<PrUpdateSpec>;
  /** write policy for this pr automation, also propagates to the notifications list for any created PRs */
  writeBindings?: Maybe<Array<Maybe<PolicyBinding>>>;
};

/** A way to create a self-service means of generating PRs against an IaC repo */
export type PrAutomationAttributes = {
  /** link to an add-on name if this can update it */
  addon?: InputMaybe<Scalars['String']['input']>;
  branch?: InputMaybe<Scalars['String']['input']>;
  /** link to a cluster if this is to perform an upgrade */
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  /** the scm connection to use for pr generation */
  connectionId?: InputMaybe<Scalars['ID']['input']>;
  /** users who can create prs with this automation */
  createBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
  documentation?: InputMaybe<Scalars['String']['input']>;
  /** string id for a repository, eg for github, this is {organization}/{repository-name} */
  identifier?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** link to a service if this can modify its configuration */
  serviceId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updates?: InputMaybe<PrAutomationUpdateSpecAttributes>;
  /** users who can update this automation */
  writeBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
};

export type PrAutomationConnection = {
  __typename?: 'PrAutomationConnection';
  edges?: Maybe<Array<Maybe<PrAutomationEdge>>>;
  pageInfo: PageInfo;
};

export type PrAutomationEdge = {
  __typename?: 'PrAutomationEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<PrAutomation>;
};

/** The operations to be performed on the files w/in the pr */
export type PrAutomationUpdateSpecAttributes = {
  files?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  matchStrategy?: InputMaybe<MatchStrategy>;
  /** list of regex scope replacement templates, useful for ANY strategies */
  regexReplacements?: InputMaybe<Array<InputMaybe<RegexReplacementAttributes>>>;
  regexes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  replaceTemplate?: InputMaybe<Scalars['String']['input']>;
  yq?: InputMaybe<Scalars['String']['input']>;
};

/** existing file updates that can be performed in a PR */
export type PrUpdateSpec = {
  __typename?: 'PrUpdateSpec';
  files?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  matchStrategy?: Maybe<MatchStrategy>;
  regexReplacements?: Maybe<Array<Maybe<RegexReplacement>>>;
  regexes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  replaceTemplate?: Maybe<Scalars['String']['output']>;
  yq?: Maybe<Scalars['String']['output']>;
};

export type PrometheusDatasource = {
  __typename?: 'PrometheusDatasource';
  format?: Maybe<Scalars['String']['output']>;
  legend?: Maybe<Scalars['String']['output']>;
  query: Scalars['String']['output'];
};

/** how a promotion for a service will be performed */
export type PromotionCriteria = {
  __typename?: 'PromotionCriteria';
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** whether you want to copy any configuration values from the source service */
  secrets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** the source service in a prior stage to promote settings from */
  source?: Maybe<ServiceDeployment>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** actions to perform if this stage service were promoted */
export type PromotionCriteriaAttributes = {
  /** the handle of the cluster for the source service */
  handle?: InputMaybe<Scalars['String']['input']>;
  /** the name of the source service */
  name?: InputMaybe<Scalars['String']['input']>;
  /** the secrets to copy over in a promotion */
  secrets?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** the id of the service to promote from */
  sourceId?: InputMaybe<Scalars['ID']['input']>;
};

/** a service to be potentially promoted */
export type PromotionService = {
  __typename?: 'PromotionService';
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the revision of the service to promote */
  revision?: Maybe<Revision>;
  /** a service to promote */
  service?: Maybe<ServiceDeployment>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** a cloud credential that can be used while creating new clusters */
export type ProviderCredential = {
  __typename?: 'ProviderCredential';
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  namespace: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProviderCredentialAttributes = {
  kind?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};

/** A reference to a pull request for your kubernetes related IaC */
export type PullRequest = {
  __typename?: 'PullRequest';
  /** the cluster this pr is meant to modify */
  cluster?: Maybe<Cluster>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the service this pr is meant to modify */
  service?: Maybe<ServiceDeployment>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

/** attributes for a pull request pointer record */
export type PullRequestAttributes = {
  creator?: InputMaybe<Scalars['String']['input']>;
  labels?: InputMaybe<Scalars['Json']['input']>;
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type PullRequestConnection = {
  __typename?: 'PullRequestConnection';
  edges?: Maybe<Array<Maybe<PullRequestEdge>>>;
  pageInfo: PageInfo;
};

export type PullRequestEdge = {
  __typename?: 'PullRequestEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<PullRequest>;
};

export type RbacAttributes = {
  readBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
  writeBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
};

export enum ReadType {
  Build = 'BUILD',
  Notification = 'NOTIFICATION',
}

export type Recipe = {
  __typename?: 'Recipe';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  oidcEnabled?: Maybe<Scalars['Boolean']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  recipeSections?: Maybe<Array<Maybe<RecipeSection>>>;
  restricted?: Maybe<Scalars['Boolean']['output']>;
};

export type RecipeConnection = {
  __typename?: 'RecipeConnection';
  edges?: Maybe<Array<Maybe<RecipeEdge>>>;
  pageInfo: PageInfo;
};

export type RecipeEdge = {
  __typename?: 'RecipeEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Recipe>;
};

export type RecipeItem = {
  __typename?: 'RecipeItem';
  configuration?: Maybe<Array<Maybe<ConfigurationItem>>>;
  id: Scalars['ID']['output'];
};

export type RecipeSection = {
  __typename?: 'RecipeSection';
  configuration?: Maybe<Array<Maybe<ConfigurationItem>>>;
  id: Scalars['ID']['output'];
  recipeItems?: Maybe<Array<Maybe<RecipeItem>>>;
  repository?: Maybe<Repository>;
};

export type Recommendation = {
  __typename?: 'Recommendation';
  containerRecommendations?: Maybe<Array<Maybe<ContainerRecommendation>>>;
};

/** a fully specified regex/replace flow */
export type RegexReplacement = {
  __typename?: 'RegexReplacement';
  regex: Scalars['String']['output'];
  /** template string to replace any match with */
  replacement: Scalars['String']['output'];
};

/** a fully specify regex/replace flow */
export type RegexReplacementAttributes = {
  regex: Scalars['String']['input'];
  replacement: Scalars['String']['input'];
};

export type Repository = {
  __typename?: 'Repository';
  configuration?: Maybe<Configuration>;
  description?: Maybe<Scalars['String']['output']>;
  docs?: Maybe<Array<Maybe<FileContent>>>;
  grafanaDns?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type RepositoryConnection = {
  __typename?: 'RepositoryConnection';
  edges?: Maybe<Array<Maybe<RepositoryEdge>>>;
  pageInfo: PageInfo;
};

export type RepositoryContext = {
  __typename?: 'RepositoryContext';
  context?: Maybe<Scalars['Map']['output']>;
  repository: Scalars['String']['output'];
};

export type RepositoryEdge = {
  __typename?: 'RepositoryEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Repository>;
};

export type ResourceSpec = {
  __typename?: 'ResourceSpec';
  cpu?: Maybe<Scalars['String']['output']>;
  memory?: Maybe<Scalars['String']['output']>;
};

export type Resources = {
  __typename?: 'Resources';
  limits?: Maybe<ResourceSpec>;
  requests?: Maybe<ResourceSpec>;
};

/** a representation of a past revision of a service */
export type Revision = {
  __typename?: 'Revision';
  /** git spec of the prior revision */
  git?: Maybe<GitRef>;
  /** description of how helm charts should be applied */
  helm?: Maybe<HelmSpec>;
  /** id of this revision */
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the commit message for this revision */
  message?: Maybe<Scalars['String']['output']>;
  /** the sha this service was pulled from */
  sha?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the service's semver */
  version: Scalars['String']['output'];
};

export type RevisionConnection = {
  __typename?: 'RevisionConnection';
  edges?: Maybe<Array<Maybe<RevisionEdge>>>;
  pageInfo: PageInfo;
};

export type RevisionEdge = {
  __typename?: 'RevisionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Revision>;
};

export type Role = {
  __typename?: 'Role';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Maybe<Permission>>>;
  repositories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  roleBindings?: Maybe<Array<Maybe<RoleBinding>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RoleAttributes = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Permission>>>;
  repositories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roleBindings?: InputMaybe<Array<InputMaybe<BindingAttributes>>>;
};

export type RoleBinding = {
  __typename?: 'RoleBinding';
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  edges?: Maybe<Array<Maybe<RoleEdge>>>;
  pageInfo: PageInfo;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Role>;
};

export type RollingUpdate = {
  __typename?: 'RollingUpdate';
  maxSurge?: Maybe<Scalars['Int']['output']>;
  maxUnavailable?: Maybe<Scalars['Int']['output']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  approveBuild?: Maybe<Build>;
  /** approves an approval pipeline gate */
  approveGate?: Maybe<PipelineGate>;
  cancelBuild?: Maybe<Build>;
  /** clones the spec of the given service to be deployed either into a new namespace or new cluster */
  cloneService?: Maybe<ServiceDeployment>;
  createAccessToken?: Maybe<AccessToken>;
  createAgentMigration?: Maybe<AgentMigration>;
  createBuild?: Maybe<Build>;
  createCluster?: Maybe<Cluster>;
  createClusterProvider?: Maybe<ClusterProvider>;
  createGitRepository?: Maybe<GitRepository>;
  createGlobalService?: Maybe<GlobalService>;
  createGroup?: Maybe<Group>;
  createGroupMember?: Maybe<GroupMember>;
  createInvite?: Maybe<Invite>;
  createPeer?: Maybe<WireguardPeer>;
  createPrAutomation?: Maybe<PrAutomation>;
  createProviderCredential?: Maybe<ProviderCredential>;
  createPullRequest?: Maybe<PullRequest>;
  /** just registers a pointer record to a PR after it was created externally be some other automation */
  createPullRequestPointer?: Maybe<PullRequest>;
  createRole?: Maybe<Role>;
  createScmConnection?: Maybe<ScmConnection>;
  createServiceAccount?: Maybe<User>;
  createServiceAccountToken?: Maybe<AccessToken>;
  createServiceDeployment?: Maybe<ServiceDeployment>;
  createUpgradePolicy?: Maybe<UpgradePolicy>;
  createWebhook?: Maybe<Webhook>;
  deleteAccessToken?: Maybe<AccessToken>;
  deleteCertificate?: Maybe<Scalars['Boolean']['output']>;
  deleteCluster?: Maybe<Cluster>;
  deleteClusterProvider?: Maybe<ClusterProvider>;
  deleteGitRepository?: Maybe<GitRepository>;
  deleteGlobalService?: Maybe<GlobalService>;
  deleteGroup?: Maybe<Group>;
  deleteGroupMember?: Maybe<GroupMember>;
  deleteJob?: Maybe<Job>;
  deleteNode?: Maybe<Node>;
  deletePeer?: Maybe<Scalars['Boolean']['output']>;
  deletePipeline?: Maybe<Pipeline>;
  deletePod?: Maybe<Pod>;
  deletePrAutomation?: Maybe<PrAutomation>;
  deleteProviderCredential?: Maybe<ProviderCredential>;
  deleteRole?: Maybe<Role>;
  deleteScmConnection?: Maybe<ScmConnection>;
  deleteServiceDeployment?: Maybe<ServiceDeployment>;
  deleteUpgradePolicy?: Maybe<UpgradePolicy>;
  deleteUser?: Maybe<User>;
  deleteWebhook?: Maybe<Webhook>;
  /** soft deletes a cluster, by deregistering it in our system but not disturbing any kubernetes objects */
  detachCluster?: Maybe<Cluster>;
  enableDeployments?: Maybe<DeploymentSettings>;
  executeRunbook?: Maybe<RunbookActionResponse>;
  /** forces a pipeline gate to be in open state */
  forceGate?: Maybe<PipelineGate>;
  installAddOn?: Maybe<ServiceDeployment>;
  installRecipe?: Maybe<Build>;
  installStack?: Maybe<Build>;
  loginLink?: Maybe<User>;
  markRead?: Maybe<User>;
  /** merges configuration for a service */
  mergeService?: Maybe<ServiceDeployment>;
  oauthCallback?: Maybe<User>;
  overlayConfiguration?: Maybe<Build>;
  /** a regular status ping to be sent by the deploy operator */
  pingCluster?: Maybe<Cluster>;
  /** marks a service as being able to proceed to the next stage of a canary rollout */
  proceed?: Maybe<ServiceDeployment>;
  readNotifications?: Maybe<User>;
  /** registers a list of runtime services discovered for the current cluster */
  registerRuntimeServices?: Maybe<Scalars['Int']['output']>;
  restartBuild?: Maybe<Build>;
  restorePostgres?: Maybe<Postgresql>;
  /** rewires this service to use the given revision id */
  rollbackService?: Maybe<ServiceDeployment>;
  /** upserts a pipeline with a given name */
  savePipeline?: Maybe<Pipeline>;
  selfManage?: Maybe<ServiceDeployment>;
  signIn?: Maybe<User>;
  signup?: Maybe<User>;
  updateCluster?: Maybe<Cluster>;
  updateClusterProvider?: Maybe<ClusterProvider>;
  updateConfiguration?: Maybe<Configuration>;
  updateDeploymentSettings?: Maybe<DeploymentSettings>;
  updateGate?: Maybe<PipelineGate>;
  updateGitRepository?: Maybe<GitRepository>;
  updateGlobalService?: Maybe<GlobalService>;
  updateGroup?: Maybe<Group>;
  updatePrAutomation?: Maybe<PrAutomation>;
  /** a reusable mutation for updating rbac settings on core services */
  updateRbac?: Maybe<Scalars['Boolean']['output']>;
  updateRole?: Maybe<Role>;
  updateScmConnection?: Maybe<ScmConnection>;
  updateServiceAccount?: Maybe<User>;
  /** updates only the components of a given service, to be sent after deploy operator syncs */
  updateServiceComponents?: Maybe<ServiceDeployment>;
  updateServiceDeployment?: Maybe<ServiceDeployment>;
  updateSmtp?: Maybe<Smtp>;
  updateUser?: Maybe<User>;
};

export type RootMutationTypeApproveBuildArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeApproveGateArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeCancelBuildArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeCloneServiceArgs = {
  attributes: ServiceCloneAttributes;
  cluster?: InputMaybe<Scalars['String']['input']>;
  clusterId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootMutationTypeCreateAccessTokenArgs = {
  scopes?: InputMaybe<Array<InputMaybe<ScopeAttributes>>>;
};

export type RootMutationTypeCreateAgentMigrationArgs = {
  attributes: AgentMigrationAttributes;
};

export type RootMutationTypeCreateBuildArgs = {
  attributes: BuildAttributes;
};

export type RootMutationTypeCreateClusterArgs = {
  attributes: ClusterAttributes;
};

export type RootMutationTypeCreateClusterProviderArgs = {
  attributes: ClusterProviderAttributes;
};

export type RootMutationTypeCreateGitRepositoryArgs = {
  attributes: GitAttributes;
};

export type RootMutationTypeCreateGlobalServiceArgs = {
  attributes: GlobalServiceAttributes;
  cluster?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootMutationTypeCreateGroupArgs = {
  attributes: GroupAttributes;
};

export type RootMutationTypeCreateGroupMemberArgs = {
  groupId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type RootMutationTypeCreateInviteArgs = {
  attributes: InviteAttributes;
};

export type RootMutationTypeCreatePeerArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootMutationTypeCreatePrAutomationArgs = {
  attributes: PrAutomationAttributes;
};

export type RootMutationTypeCreateProviderCredentialArgs = {
  attributes: ProviderCredentialAttributes;
  name: Scalars['String']['input'];
};

export type RootMutationTypeCreatePullRequestArgs = {
  branch?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['Json']['input']>;
  id: Scalars['ID']['input'];
};

export type RootMutationTypeCreatePullRequestPointerArgs = {
  attributes?: InputMaybe<PullRequestAttributes>;
};

export type RootMutationTypeCreateRoleArgs = {
  attributes: RoleAttributes;
};

export type RootMutationTypeCreateScmConnectionArgs = {
  attributes: ScmConnectionAttributes;
};

export type RootMutationTypeCreateServiceAccountArgs = {
  attributes: ServiceAccountAttributes;
};

export type RootMutationTypeCreateServiceAccountTokenArgs = {
  id: Scalars['ID']['input'];
  scopes?: InputMaybe<Array<InputMaybe<ScopeAttributes>>>;
};

export type RootMutationTypeCreateServiceDeploymentArgs = {
  attributes: ServiceDeploymentAttributes;
  cluster?: InputMaybe<Scalars['String']['input']>;
  clusterId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootMutationTypeCreateUpgradePolicyArgs = {
  attributes: UpgradePolicyAttributes;
};

export type RootMutationTypeCreateWebhookArgs = {
  attributes: WebhookAttributes;
};

export type RootMutationTypeDeleteAccessTokenArgs = {
  token: Scalars['String']['input'];
};

export type RootMutationTypeDeleteCertificateArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
};

export type RootMutationTypeDeleteClusterArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteClusterProviderArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteGitRepositoryArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteGlobalServiceArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteGroupArgs = {
  groupId: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteGroupMemberArgs = {
  groupId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteJobArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootMutationTypeDeleteNodeArgs = {
  name: Scalars['String']['input'];
};

export type RootMutationTypeDeletePeerArgs = {
  name: Scalars['String']['input'];
};

export type RootMutationTypeDeletePipelineArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDeletePodArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootMutationTypeDeletePrAutomationArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteProviderCredentialArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteScmConnectionArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteServiceDeploymentArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteUpgradePolicyArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteUserArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDeleteWebhookArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeDetachClusterArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeExecuteRunbookArgs = {
  input: RunbookActionInput;
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
};

export type RootMutationTypeForceGateArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeInstallAddOnArgs = {
  clusterId: Scalars['ID']['input'];
  configuration?: InputMaybe<Array<InputMaybe<ConfigAttributes>>>;
  global?: InputMaybe<GlobalServiceAttributes>;
  name: Scalars['String']['input'];
};

export type RootMutationTypeInstallRecipeArgs = {
  context: Scalars['Map']['input'];
  id: Scalars['ID']['input'];
  oidc?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RootMutationTypeInstallStackArgs = {
  context: ContextAttributes;
  name: Scalars['String']['input'];
  oidc?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RootMutationTypeLoginLinkArgs = {
  key: Scalars['String']['input'];
};

export type RootMutationTypeMarkReadArgs = {
  type?: InputMaybe<ReadType>;
};

export type RootMutationTypeMergeServiceArgs = {
  configuration?: InputMaybe<Array<InputMaybe<ConfigAttributes>>>;
  id: Scalars['ID']['input'];
};

export type RootMutationTypeOauthCallbackArgs = {
  code: Scalars['String']['input'];
  redirect?: InputMaybe<Scalars['String']['input']>;
};

export type RootMutationTypeOverlayConfigurationArgs = {
  context: Scalars['Map']['input'];
  namespace: Scalars['String']['input'];
};

export type RootMutationTypePingClusterArgs = {
  attributes: ClusterPing;
};

export type RootMutationTypeProceedArgs = {
  cluster?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promotion?: InputMaybe<ServicePromotion>;
};

export type RootMutationTypeRegisterRuntimeServicesArgs = {
  serviceId?: InputMaybe<Scalars['ID']['input']>;
  services?: InputMaybe<Array<InputMaybe<RuntimeServiceAttributes>>>;
};

export type RootMutationTypeRestartBuildArgs = {
  id: Scalars['ID']['input'];
};

export type RootMutationTypeRestorePostgresArgs = {
  clone?: InputMaybe<CloneAttributes>;
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  timestamp: Scalars['DateTime']['input'];
};

export type RootMutationTypeRollbackServiceArgs = {
  cluster?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  revisionId: Scalars['ID']['input'];
};

export type RootMutationTypeSavePipelineArgs = {
  attributes: PipelineAttributes;
  name: Scalars['String']['input'];
};

export type RootMutationTypeSelfManageArgs = {
  values: Scalars['String']['input'];
};

export type RootMutationTypeSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RootMutationTypeSignupArgs = {
  attributes: UserAttributes;
  inviteId: Scalars['String']['input'];
};

export type RootMutationTypeUpdateClusterArgs = {
  attributes: ClusterUpdateAttributes;
  id: Scalars['ID']['input'];
};

export type RootMutationTypeUpdateClusterProviderArgs = {
  attributes: ClusterProviderUpdateAttributes;
  id: Scalars['ID']['input'];
};

export type RootMutationTypeUpdateConfigurationArgs = {
  content: Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  repository: Scalars['String']['input'];
  tool?: InputMaybe<Tool>;
};

export type RootMutationTypeUpdateDeploymentSettingsArgs = {
  attributes: DeploymentSettingsAttributes;
};

export type RootMutationTypeUpdateGateArgs = {
  attributes: GateUpdateAttributes;
  id: Scalars['ID']['input'];
};

export type RootMutationTypeUpdateGitRepositoryArgs = {
  attributes: GitAttributes;
  id: Scalars['ID']['input'];
};

export type RootMutationTypeUpdateGlobalServiceArgs = {
  attributes: GlobalServiceAttributes;
  id: Scalars['ID']['input'];
};

export type RootMutationTypeUpdateGroupArgs = {
  attributes: GroupAttributes;
  groupId: Scalars['ID']['input'];
};

export type RootMutationTypeUpdatePrAutomationArgs = {
  attributes: PrAutomationAttributes;
  id: Scalars['ID']['input'];
};

export type RootMutationTypeUpdateRbacArgs = {
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  providerId?: InputMaybe<Scalars['ID']['input']>;
  rbac: RbacAttributes;
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootMutationTypeUpdateRoleArgs = {
  attributes: RoleAttributes;
  id: Scalars['ID']['input'];
};

export type RootMutationTypeUpdateScmConnectionArgs = {
  attributes: ScmConnectionAttributes;
  id: Scalars['ID']['input'];
};

export type RootMutationTypeUpdateServiceAccountArgs = {
  attributes: ServiceAccountAttributes;
  id: Scalars['ID']['input'];
};

export type RootMutationTypeUpdateServiceComponentsArgs = {
  components?: InputMaybe<Array<InputMaybe<ComponentAttributes>>>;
  errors?: InputMaybe<Array<InputMaybe<ServiceErrorAttributes>>>;
  id: Scalars['ID']['input'];
};

export type RootMutationTypeUpdateServiceDeploymentArgs = {
  attributes: ServiceUpdateAttributes;
  cluster?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type RootMutationTypeUpdateSmtpArgs = {
  smtp: SmtpInput;
};

export type RootMutationTypeUpdateUserArgs = {
  attributes: UserAttributes;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  accessToken?: Maybe<AccessToken>;
  accessTokens?: Maybe<AccessTokenConnection>;
  account?: Maybe<Account>;
  ai?: Maybe<Scalars['String']['output']>;
  application?: Maybe<Application>;
  applications?: Maybe<Array<Maybe<Application>>>;
  auditMetrics?: Maybe<Array<Maybe<AuditMetric>>>;
  audits?: Maybe<AuditConnection>;
  build?: Maybe<Build>;
  buildInfo?: Maybe<BuildInfo>;
  builds?: Maybe<BuildConnection>;
  cachedPods?: Maybe<Array<Maybe<Pod>>>;
  canary?: Maybe<Canary>;
  certificate?: Maybe<Certificate>;
  /** fetches an individual cluster */
  cluster?: Maybe<Cluster>;
  /** list all addons currently resident in the artifacts repo */
  clusterAddOns?: Maybe<Array<Maybe<ClusterAddOn>>>;
  clusterGates?: Maybe<Array<Maybe<PipelineGate>>>;
  clusterInfo?: Maybe<ClusterInfo>;
  /** fetches an individual cluster provider */
  clusterProvider?: Maybe<ClusterProvider>;
  /** a relay connection of all providers visible to the current user */
  clusterProviders?: Maybe<ClusterProviderConnection>;
  /** the services deployed in the current cluster, to be polled by the deploy operator */
  clusterServices?: Maybe<Array<Maybe<ServiceDeployment>>>;
  /** gets summary information for all healthy/unhealthy clusters in your fleet */
  clusterStatuses?: Maybe<Array<Maybe<ClusterStatusInfo>>>;
  /** a relay connection of all clusters visible to the current user */
  clusters?: Maybe<ClusterConnection>;
  configMap?: Maybe<ConfigMap>;
  configMaps?: Maybe<Array<Maybe<ConfigMap>>>;
  configuration?: Maybe<ConsoleConfiguration>;
  configurationOverlays?: Maybe<Array<Maybe<ConfigurationOverlay>>>;
  context?: Maybe<Array<Maybe<RepositoryContext>>>;
  cronJob?: Maybe<CronJob>;
  daemonSet?: Maybe<DaemonSet>;
  dashboard?: Maybe<Dashboard>;
  dashboards?: Maybe<Array<Maybe<Dashboard>>>;
  deployment?: Maybe<Deployment>;
  deploymentSettings?: Maybe<DeploymentSettings>;
  externalToken?: Maybe<Scalars['String']['output']>;
  gitRepositories?: Maybe<GitRepositoryConnection>;
  gitRepository?: Maybe<GitRepository>;
  globalService?: Maybe<GlobalService>;
  group?: Maybe<Group>;
  groupMembers?: Maybe<GroupMemberConnection>;
  groups?: Maybe<GroupConnection>;
  helmRepositories?: Maybe<Array<Maybe<HelmRepository>>>;
  helmRepository?: Maybe<HelmRepository>;
  ingress?: Maybe<Ingress>;
  installations?: Maybe<InstallationConnection>;
  invite?: Maybe<Invite>;
  job?: Maybe<Job>;
  logFilters?: Maybe<Array<Maybe<LogFilter>>>;
  loginInfo?: Maybe<LoginInfo>;
  logs?: Maybe<Array<Maybe<LogStream>>>;
  me?: Maybe<User>;
  metric?: Maybe<Array<Maybe<MetricResponse>>>;
  /** tells you what cluster a deploy token points to */
  myCluster?: Maybe<Cluster>;
  myWireguardPeers?: Maybe<Array<Maybe<WireguardPeer>>>;
  namespaces?: Maybe<Array<Maybe<Namespace>>>;
  node?: Maybe<Node>;
  nodeMetric?: Maybe<NodeMetric>;
  nodeMetrics?: Maybe<Array<Maybe<NodeMetric>>>;
  nodes?: Maybe<Array<Maybe<Node>>>;
  notifications?: Maybe<NotificationConnection>;
  pipeline?: Maybe<Pipeline>;
  pipelines?: Maybe<PipelineConnection>;
  pluralCluster?: Maybe<PluralCluster>;
  pluralContext?: Maybe<PluralContext>;
  pluralGitRepository?: Maybe<PluralGitRepository>;
  pluralServiceDeployment?: Maybe<PluralServiceDeployment>;
  pod?: Maybe<Pod>;
  pods?: Maybe<PodConnection>;
  postgresDatabase?: Maybe<Postgresql>;
  postgresDatabases?: Maybe<Array<Maybe<Postgresql>>>;
  prAutomation?: Maybe<PrAutomation>;
  prAutomations?: Maybe<PrAutomationConnection>;
  pullRequests?: Maybe<PullRequestConnection>;
  recipe?: Maybe<Recipe>;
  recipes?: Maybe<RecipeConnection>;
  repositories?: Maybe<RepositoryConnection>;
  repository?: Maybe<Repository>;
  role?: Maybe<Role>;
  roles?: Maybe<RoleConnection>;
  runbook?: Maybe<Runbook>;
  runbooks?: Maybe<Array<Maybe<Runbook>>>;
  /** fetch an individual runtime service for more thorough detail views */
  runtimeService?: Maybe<RuntimeService>;
  scalingRecommendation?: Maybe<VerticalPodAutoscaler>;
  scmConnection?: Maybe<ScmConnection>;
  scmConnections?: Maybe<ScmConnectionConnection>;
  secret?: Maybe<Secret>;
  secrets?: Maybe<Array<Maybe<Secret>>>;
  service?: Maybe<Service>;
  serviceAccounts?: Maybe<UserConnection>;
  /** fetches details of this service deployment, and can be called by the deploy operator */
  serviceDeployment?: Maybe<ServiceDeployment>;
  serviceDeployments?: Maybe<ServiceDeploymentConnection>;
  serviceStatuses?: Maybe<Array<Maybe<ServiceStatusCount>>>;
  smtp?: Maybe<Smtp>;
  stack?: Maybe<Stack>;
  statefulSet?: Maybe<StatefulSet>;
  /** adds the ability to search/filter through all tag name/value pairs */
  tagPairs?: Maybe<TagConnection>;
  /** lists tags applied to any clusters in the fleet */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  temporaryToken?: Maybe<Scalars['String']['output']>;
  /** exchanges a kubeconfig token for user info */
  tokenExchange?: Maybe<User>;
  unstructuredResource?: Maybe<KubernetesUnstructured>;
  upgradePlan?: Maybe<UpgradePlan>;
  upgradePolicies?: Maybe<Array<Maybe<UpgradePolicy>>>;
  user?: Maybe<User>;
  users?: Maybe<UserConnection>;
  webhooks?: Maybe<WebhookConnection>;
  wireguardPeer?: Maybe<WireguardPeer>;
  wireguardPeers?: Maybe<Array<Maybe<WireguardPeer>>>;
};

export type RootQueryTypeAccessTokenArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryTypeAccessTokensArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RootQueryTypeAiArgs = {
  prompt: Scalars['String']['input'];
};

export type RootQueryTypeApplicationArgs = {
  name: Scalars['String']['input'];
};

export type RootQueryTypeAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  repo?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeBuildArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryTypeBuildsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RootQueryTypeCachedPodsArgs = {
  namespaces?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RootQueryTypeCanaryArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeCertificateArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeClusterArgs = {
  handle?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeClusterProviderArgs = {
  cloud?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeClusterProvidersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RootQueryTypeClusterStatusesArgs = {
  q?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<TagInput>;
};

export type RootQueryTypeClustersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  healthy?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<TagInput>;
  tagQuery?: InputMaybe<TagQuery>;
};

export type RootQueryTypeConfigMapArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeConfigMapsArgs = {
  namespace: Scalars['String']['input'];
};

export type RootQueryTypeConfigurationOverlaysArgs = {
  namespace: Scalars['String']['input'];
};

export type RootQueryTypeCronJobArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeDaemonSetArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeDashboardArgs = {
  labels?: InputMaybe<Array<InputMaybe<LabelInput>>>;
  name: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  repo: Scalars['String']['input'];
  step?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeDashboardsArgs = {
  repo: Scalars['String']['input'];
};

export type RootQueryTypeDeploymentArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeGitRepositoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RootQueryTypeGitRepositoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeGlobalServiceArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryTypeGroupArgs = {
  name: Scalars['String']['input'];
};

export type RootQueryTypeGroupMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupId: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RootQueryTypeGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeHelmRepositoryArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
};

export type RootQueryTypeIngressArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RootQueryTypeInviteArgs = {
  id: Scalars['String']['input'];
};

export type RootQueryTypeJobArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeLogFiltersArgs = {
  namespace: Scalars['String']['input'];
};

export type RootQueryTypeLoginInfoArgs = {
  redirect?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeLogsArgs = {
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  end?: InputMaybe<Scalars['Long']['input']>;
  limit: Scalars['Int']['input'];
  query: Scalars['String']['input'];
  start?: InputMaybe<Scalars['Long']['input']>;
};

export type RootQueryTypeMetricArgs = {
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
  step?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeNamespacesArgs = {
  clusterId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeNodeArgs = {
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type RootQueryTypeNodeMetricArgs = {
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type RootQueryTypeNodeMetricsArgs = {
  clusterId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  all?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RootQueryTypePipelineArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryTypePipelinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RootQueryTypePluralClusterArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypePluralGitRepositoryArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypePluralServiceDeploymentArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypePodArgs = {
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypePodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  namespace?: InputMaybe<Scalars['String']['input']>;
  namespaces?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RootQueryTypePostgresDatabaseArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
};

export type RootQueryTypePrAutomationArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryTypePrAutomationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RootQueryTypePullRequestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeRecipeArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryTypeRecipesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RootQueryTypeRepositoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};

export type RootQueryTypeRepositoryArgs = {
  name: Scalars['String']['input'];
};

export type RootQueryTypeRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeRunbookArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
};

export type RootQueryTypeRunbooksArgs = {
  namespace: Scalars['String']['input'];
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RootQueryTypeRuntimeServiceArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryTypeScalingRecommendationArgs = {
  kind: AutoscalingTarget;
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
};

export type RootQueryTypeScmConnectionArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryTypeScmConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RootQueryTypeSecretArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeSecretsArgs = {
  namespace: Scalars['String']['input'];
};

export type RootQueryTypeServiceArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeServiceAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeServiceDeploymentArgs = {
  cluster?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeServiceDeploymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cluster?: InputMaybe<Scalars['String']['input']>;
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ServiceDeploymentStatus>;
};

export type RootQueryTypeServiceStatusesArgs = {
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ServiceDeploymentStatus>;
};

export type RootQueryTypeStackArgs = {
  name: Scalars['String']['input'];
};

export type RootQueryTypeStatefulSetArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeTagPairsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeTagsArgs = {
  tag?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeTokenExchangeArgs = {
  token: Scalars['String']['input'];
};

export type RootQueryTypeUnstructuredResourceArgs = {
  group?: InputMaybe<Scalars['String']['input']>;
  kind: Scalars['String']['input'];
  name: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['ID']['input']>;
  version: Scalars['String']['input'];
};

export type RootQueryTypeUpgradePlanArgs = {
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryTypeUserArgs = {
  email: Scalars['String']['input'];
};

export type RootQueryTypeUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryTypeWebhooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RootQueryTypeWireguardPeerArgs = {
  name: Scalars['String']['input'];
};

export type RootSubscriptionType = {
  __typename?: 'RootSubscriptionType';
  applicationDelta?: Maybe<ApplicationDelta>;
  buildDelta?: Maybe<BuildDelta>;
  commandDelta?: Maybe<CommandDelta>;
  notificationDelta?: Maybe<NotificationDelta>;
  podDelta?: Maybe<PodDelta>;
};

export type RootSubscriptionTypeBuildDeltaArgs = {
  buildId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootSubscriptionTypeCommandDeltaArgs = {
  buildId: Scalars['ID']['input'];
};

export type Runbook = {
  __typename?: 'Runbook';
  data?: Maybe<Array<Maybe<RunbookData>>>;
  executions?: Maybe<RunbookExecutionConnection>;
  name: Scalars['String']['output'];
  spec: RunbookSpec;
  status?: Maybe<RunbookStatus>;
};

export type RunbookDataArgs = {
  context?: InputMaybe<RunbookContext>;
};

export type RunbookExecutionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RunbookAction = {
  __typename?: 'RunbookAction';
  configuration?: Maybe<ConfigurationAction>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type RunbookActionInput = {
  action: Scalars['String']['input'];
  context: Scalars['Map']['input'];
};

export type RunbookActionResponse = {
  __typename?: 'RunbookActionResponse';
  redirectTo?: Maybe<Scalars['String']['output']>;
};

export type RunbookAlertStatus = {
  __typename?: 'RunbookAlertStatus';
  annotations?: Maybe<Scalars['Map']['output']>;
  fingerprint?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Scalars['Map']['output']>;
  name: Scalars['String']['output'];
  startsAt?: Maybe<Scalars['String']['output']>;
};

export type RunbookContext = {
  timeseriesStart?: InputMaybe<Scalars['Int']['input']>;
  timeseriesStep?: InputMaybe<Scalars['String']['input']>;
};

export type RunbookData = {
  __typename?: 'RunbookData';
  kubernetes?: Maybe<KubernetesData>;
  name: Scalars['String']['output'];
  nodes?: Maybe<Array<Maybe<Node>>>;
  prometheus?: Maybe<Array<Maybe<MetricResponse>>>;
  source?: Maybe<RunbookDatasource>;
};

export type RunbookDatasource = {
  __typename?: 'RunbookDatasource';
  kubernetes?: Maybe<KubernetesDatasource>;
  name: Scalars['String']['output'];
  prometheus?: Maybe<PrometheusDatasource>;
  type: Scalars['String']['output'];
};

export type RunbookExecution = {
  __typename?: 'RunbookExecution';
  context: Scalars['Map']['output'];
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  namespace: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type RunbookExecutionConnection = {
  __typename?: 'RunbookExecutionConnection';
  edges?: Maybe<Array<Maybe<RunbookExecutionEdge>>>;
  pageInfo: PageInfo;
};

export type RunbookExecutionEdge = {
  __typename?: 'RunbookExecutionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<RunbookExecution>;
};

export type RunbookSpec = {
  __typename?: 'RunbookSpec';
  actions?: Maybe<Array<Maybe<RunbookAction>>>;
  datasources?: Maybe<Array<Maybe<RunbookDatasource>>>;
  description?: Maybe<Scalars['String']['output']>;
  display?: Maybe<Scalars['Map']['output']>;
  name: Scalars['String']['output'];
};

export type RunbookStatus = {
  __typename?: 'RunbookStatus';
  alerts?: Maybe<Array<Maybe<RunbookAlertStatus>>>;
};

export type RunningState = {
  __typename?: 'RunningState';
  startedAt?: Maybe<Scalars['String']['output']>;
};

/** a full specification of a kubernetes runtime component's requirements */
export type RuntimeAddon = {
  __typename?: 'RuntimeAddon';
  /** the url to the add-ons git repository */
  gitUrl?: Maybe<Scalars['String']['output']>;
  /** an icon to identify this runtime add-on */
  icon?: Maybe<Scalars['String']['output']>;
  /** the add-on's readme, this is a heavy operation that should not be performed w/in lists */
  readme?: Maybe<Scalars['String']['output']>;
  /** the release page for a runtime service at a version, this is a heavy operation not suitable for lists */
  releaseUrl?: Maybe<Scalars['String']['output']>;
  versions?: Maybe<Array<Maybe<AddonVersion>>>;
};

/** a full specification of a kubernetes runtime component's requirements */
export type RuntimeAddonReleaseUrlArgs = {
  version: Scalars['String']['input'];
};

/** a service encapsulating a controller like istio/ingress-nginx/etc that is meant to extend the kubernetes api */
export type RuntimeService = {
  __typename?: 'RuntimeService';
  /** the full specification of this kubernetes add-on */
  addon?: Maybe<RuntimeAddon>;
  /** the version of the add-on you've currently deployed */
  addonVersion?: Maybe<AddonVersion>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** add-on name */
  name: Scalars['String']['output'];
  /** the plural service it came from */
  service?: Maybe<ServiceDeployment>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** add-on version, should be semver formatted */
  version: Scalars['String']['output'];
};

export type RuntimeServiceAttributes = {
  name: Scalars['String']['input'];
  version: Scalars['String']['input'];
};

/** an object representing the means to connect to SCM apis */
export type ScmConnection = {
  __typename?: 'ScmConnection';
  /** base url for HTTP apis for self-hosted versions if different from base url */
  apiUrl?: Maybe<Scalars['String']['output']>;
  /** base url for git clones for self-hosted versions */
  baseUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  type: ScmType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** an object representing a means to authenticate to a source control provider like Github */
export type ScmConnectionAttributes = {
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
  type: ScmType;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type ScmConnectionConnection = {
  __typename?: 'ScmConnectionConnection';
  edges?: Maybe<Array<Maybe<ScmConnectionEdge>>>;
  pageInfo: PageInfo;
};

export type ScmConnectionEdge = {
  __typename?: 'ScmConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<ScmConnection>;
};

export enum ScmType {
  Github = 'GITHUB',
  Gitlab = 'GITLAB',
}

export type ScopeAttributes = {
  api?: InputMaybe<Scalars['String']['input']>;
  apis?: InputMaybe<Array<Scalars['String']['input']>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Secret = {
  __typename?: 'Secret';
  data: Scalars['Map']['output'];
  metadata: Metadata;
  type?: Maybe<Scalars['String']['output']>;
};

export type SecretKeySelector = {
  __typename?: 'SecretKeySelector';
  key?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type Service = {
  __typename?: 'Service';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  pods?: Maybe<Array<Maybe<Pod>>>;
  raw: Scalars['String']['output'];
  spec: ServiceSpec;
  status: ServiceStatus;
};

export type ServiceAccountAttributes = {
  assumeBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UserRoleAttributes>;
};

export type ServiceCloneAttributes = {
  configuration?: InputMaybe<Array<InputMaybe<ConfigAttributes>>>;
  name: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};

/** representation of a kubernetes component deployed by a service */
export type ServiceComponent = {
  __typename?: 'ServiceComponent';
  /** any api deprecations discovered from this component */
  apiDeprecations?: Maybe<Array<Maybe<ApiDeprecation>>>;
  /** the live and desired states of this service component */
  content?: Maybe<ComponentContent>;
  /** api group of this resource */
  group?: Maybe<Scalars['String']['output']>;
  /** internal id */
  id: Scalars['ID']['output'];
  /** api kind of this resource */
  kind: Scalars['String']['output'];
  /** kubernetes name of this resource */
  name: Scalars['String']['output'];
  /** kubernetes namespace of this resource */
  namespace?: Maybe<Scalars['String']['output']>;
  /** the service this component belongs to */
  service?: Maybe<ServiceDeployment>;
  /** kubernetes component health enum */
  state?: Maybe<ComponentState>;
  /** whether this component has been applied to the k8s api */
  synced: Scalars['Boolean']['output'];
  /** api version of this resource */
  version?: Maybe<Scalars['String']['output']>;
};

/** a configuration item k/v pair */
export type ServiceConfiguration = {
  __typename?: 'ServiceConfiguration';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** a reference to a service deployed from a git repo into a cluster */
export type ServiceDeployment = {
  __typename?: 'ServiceDeployment';
  /** the cluster this service is deployed into */
  cluster?: Maybe<Cluster>;
  /** a n / m representation of the number of healthy components of this service */
  componentStatus?: Maybe<Scalars['String']['output']>;
  /** the kubernetes component of a service */
  components?: Maybe<Array<Maybe<ServiceComponent>>>;
  /** possibly secret configuration used to template the manifests of this service */
  configuration?: Maybe<Array<Maybe<ServiceConfiguration>>>;
  /** the time this service was scheduled for deletion */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** fetches the /docs directory within this services git tree.  This is a heavy operation and should NOT be used in list queries */
  docs?: Maybe<Array<Maybe<GitFile>>>;
  /** whether this service should not actively reconcile state and instead simply report pending changes */
  dryRun?: Maybe<Scalars['Boolean']['output']>;
  /** whether this service is editable */
  editable?: Maybe<Scalars['Boolean']['output']>;
  /** a list of errors generated by the deployment operator */
  errors?: Maybe<Array<Maybe<ServiceError>>>;
  /** description on where in git the service's manifests should be fetched */
  git?: Maybe<GitRef>;
  /** the global service this service is the source for */
  globalService?: Maybe<GlobalService>;
  /** description of how helm charts should be applied */
  helm?: Maybe<HelmSpec>;
  helmRepository?: Maybe<HelmRepository>;
  /** internal id of this service */
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** the desired sync interval for this service */
  interval?: Maybe<Scalars['String']['output']>;
  /** kustomize related service metadata */
  kustomize?: Maybe<Kustomize>;
  /** the commit message currently in use */
  message?: Maybe<Scalars['String']['output']>;
  /** human readable name of this service, must be unique per cluster */
  name: Scalars['String']['output'];
  /** kubernetes namespace this service will be deployed to */
  namespace: Scalars['String']['output'];
  /** whether this service is controlled by a global service */
  owner?: Maybe<GlobalService>;
  /** how you'd like to perform a canary promotion */
  promotion?: Maybe<ServicePromotion>;
  /** if true, deletion of this service is not allowed */
  protect?: Maybe<Scalars['Boolean']['output']>;
  /** read policy for this service */
  readBindings?: Maybe<Array<Maybe<PolicyBinding>>>;
  /** the git repo of this service */
  repository?: Maybe<GitRepository>;
  /** the current revision of this service */
  revision?: Maybe<Revision>;
  /** a relay connection of all revisions of this service, these are periodically pruned up to a history limit */
  revisions?: Maybe<RevisionConnection>;
  /** latest git sha we pulled from */
  sha?: Maybe<Scalars['String']['output']>;
  /** A summary status enum for the health of this service */
  status: ServiceDeploymentStatus;
  /** settings for advanced tuning of the sync process */
  syncConfig?: Maybe<SyncConfig>;
  /** https url to fetch the latest tarball of kubernetes manifests */
  tarball?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** semver of this service */
  version: Scalars['String']['output'];
  /** write policy of this service */
  writeBindings?: Maybe<Array<Maybe<PolicyBinding>>>;
};

/** a reference to a service deployed from a git repo into a cluster */
export type ServiceDeploymentRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceDeploymentAttributes = {
  configuration?: InputMaybe<Array<InputMaybe<ConfigAttributes>>>;
  docsPath?: InputMaybe<Scalars['String']['input']>;
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
  git?: InputMaybe<GitRefAttributes>;
  helm?: InputMaybe<HelmConfigAttributes>;
  interval?: InputMaybe<Scalars['String']['input']>;
  kustomize?: InputMaybe<KustomizeAttributes>;
  name: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  protect?: InputMaybe<Scalars['Boolean']['input']>;
  readBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
  repositoryId?: InputMaybe<Scalars['ID']['input']>;
  syncConfig?: InputMaybe<SyncConfigAttributes>;
  version?: InputMaybe<Scalars['String']['input']>;
  writeBindings?: InputMaybe<Array<InputMaybe<PolicyBindingAttributes>>>;
};

export type ServiceDeploymentConnection = {
  __typename?: 'ServiceDeploymentConnection';
  edges?: Maybe<Array<Maybe<ServiceDeploymentEdge>>>;
  pageInfo: PageInfo;
};

export type ServiceDeploymentEdge = {
  __typename?: 'ServiceDeploymentEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<ServiceDeployment>;
};

export enum ServiceDeploymentStatus {
  Failed = 'FAILED',
  Healthy = 'HEALTHY',
  Paused = 'PAUSED',
  Stale = 'STALE',
  Synced = 'SYNCED',
}

/** an error sent from the deploy operator about sync progress */
export type ServiceError = {
  __typename?: 'ServiceError';
  message: Scalars['String']['output'];
  source: Scalars['String']['output'];
};

export type ServiceErrorAttributes = {
  message: Scalars['String']['input'];
  source: Scalars['String']['input'];
};

export type ServicePort = {
  __typename?: 'ServicePort';
  name?: Maybe<Scalars['String']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
  protocol?: Maybe<Scalars['String']['output']>;
  targetPort?: Maybe<Scalars['String']['output']>;
};

export enum ServicePromotion {
  Ignore = 'IGNORE',
  Proceed = 'PROCEED',
  Rollback = 'ROLLBACK',
}

export type ServiceSpec = {
  __typename?: 'ServiceSpec';
  clusterIp?: Maybe<Scalars['String']['output']>;
  ports?: Maybe<Array<Maybe<ServicePort>>>;
  selector?: Maybe<Scalars['Map']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ServiceStatus = {
  __typename?: 'ServiceStatus';
  loadBalancer?: Maybe<LoadBalancerStatus>;
};

/** a rollup count of the statuses of services in a query */
export type ServiceStatusCount = {
  __typename?: 'ServiceStatusCount';
  count: Scalars['Int']['output'];
  status: ServiceDeploymentStatus;
};

export type ServiceUpdateAttributes = {
  configuration?: InputMaybe<Array<InputMaybe<ConfigAttributes>>>;
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
  git?: InputMaybe<GitRefAttributes>;
  helm?: InputMaybe<HelmConfigAttributes>;
  interval?: InputMaybe<Scalars['String']['input']>;
  kustomize?: InputMaybe<KustomizeAttributes>;
  protect?: InputMaybe<Scalars['Boolean']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export enum Severity {
  Critical = 'CRITICAL',
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  None = 'NONE',
}

export type Smtp = {
  __typename?: 'Smtp';
  password?: Maybe<Scalars['String']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  server?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

export type SmtpInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  server?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type Stack = {
  __typename?: 'Stack';
  bundles?: Maybe<Array<Maybe<Recipe>>>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  sections?: Maybe<Array<Maybe<RecipeSection>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** the configuration of a service within a pipeline stage, including optional promotion criteria */
export type StageService = {
  __typename?: 'StageService';
  /** criteria for how a promotion of this service shall be performed */
  criteria?: Maybe<PromotionCriteria>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  /** a pointer to a service */
  service?: Maybe<ServiceDeployment>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** the attributes of a service w/in a specific stage */
export type StageServiceAttributes = {
  criteria?: InputMaybe<PromotionCriteriaAttributes>;
  /** the cluster handle of this service */
  handle?: InputMaybe<Scalars['String']['input']>;
  /** the name of this service */
  name?: InputMaybe<Scalars['String']['input']>;
  /** the name of this service */
  serviceId?: InputMaybe<Scalars['ID']['input']>;
};

export type StatefulSet = {
  __typename?: 'StatefulSet';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  pods?: Maybe<Array<Maybe<Pod>>>;
  raw: Scalars['String']['output'];
  spec: StatefulSetSpec;
  status: StatefulSetStatus;
};

export type StatefulSetSpec = {
  __typename?: 'StatefulSetSpec';
  replicas?: Maybe<Scalars['Int']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

export type StatefulSetStatus = {
  __typename?: 'StatefulSetStatus';
  currentReplicas?: Maybe<Scalars['Int']['output']>;
  readyReplicas?: Maybe<Scalars['Int']['output']>;
  replicas?: Maybe<Scalars['Int']['output']>;
  updatedReplicas?: Maybe<Scalars['Int']['output']>;
};

export enum Status {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Queued = 'QUEUED',
  Running = 'RUNNING',
  Successful = 'SUCCESSFUL',
}

export type StatusComponent = {
  __typename?: 'StatusComponent';
  group?: Maybe<Scalars['String']['output']>;
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type StatusCondition = {
  __typename?: 'StatusCondition';
  message: Scalars['String']['output'];
  reason: Scalars['String']['output'];
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** Advanced configuration of how to sync resources */
export type SyncConfig = {
  __typename?: 'SyncConfig';
  namespaceMetadata?: Maybe<NamespaceMetadata>;
};

export type SyncConfigAttributes = {
  namespaceMetadata?: InputMaybe<MetadataAttributes>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TagAttributes = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type TagConnection = {
  __typename?: 'TagConnection';
  edges?: Maybe<Array<Maybe<TagEdge>>>;
  pageInfo: PageInfo;
};

export type TagEdge = {
  __typename?: 'TagEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Tag>;
};

export type TagInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type TagQuery = {
  op: Conjunction;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

/** a kubernetes node taint */
export type Taint = {
  __typename?: 'Taint';
  effect: Scalars['String']['output'];
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TaintAttributes = {
  effect: Scalars['String']['input'];
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type TargetRef = {
  __typename?: 'TargetRef';
  apiVersion?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TerminatedState = {
  __typename?: 'TerminatedState';
  exitCode?: Maybe<Scalars['Int']['output']>;
  finishedAt?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['String']['output']>;
};

export enum Tool {
  Helm = 'HELM',
  Terraform = 'TERRAFORM',
}

export type UpgradePlan = {
  __typename?: 'UpgradePlan';
  events?: Maybe<Array<Maybe<Event>>>;
  metadata: Metadata;
  pods?: Maybe<Array<Maybe<Pod>>>;
  raw: Scalars['String']['output'];
  spec: UpgradePlanSpec;
  status: UpgradePlanStatus;
};

export type UpgradePlanSpec = {
  __typename?: 'UpgradePlanSpec';
  concurrency?: Maybe<Scalars['Int']['output']>;
  cordon?: Maybe<Scalars['Boolean']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type UpgradePlanStatus = {
  __typename?: 'UpgradePlanStatus';
  conditions?: Maybe<Array<Maybe<StatusCondition>>>;
};

export type UpgradePolicy = {
  __typename?: 'UpgradePolicy';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  repositories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  target: Scalars['String']['output'];
  type: UpgradePolicyType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type UpgradePolicyAttributes = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  repositories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  target: Scalars['String']['input'];
  type: UpgradePolicyType;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export enum UpgradePolicyType {
  Approval = 'APPROVAL',
  Deploy = 'DEPLOY',
  Ignore = 'IGNORE',
}

export type User = {
  __typename?: 'User';
  assumeBindings?: Maybe<Array<Maybe<PolicyBinding>>>;
  backgroundColor?: Maybe<Scalars['String']['output']>;
  boundRoles?: Maybe<Array<Maybe<Role>>>;
  buildTimestamp?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  groups?: Maybe<Array<Maybe<Group>>>;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  jwt?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  pluralId?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Scalars['String']['output']>;
  readTimestamp?: Maybe<Scalars['DateTime']['output']>;
  roles?: Maybe<UserRoles>;
  unreadNotifications?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserAttributes = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UserRoleAttributes>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<User>;
};

export type UserRoleAttributes = {
  admin?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserRoles = {
  __typename?: 'UserRoles';
  admin?: Maybe<Scalars['Boolean']['output']>;
};

/** a shortform reference to an addon by version */
export type VersionReference = {
  __typename?: 'VersionReference';
  name: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type VerticalPodAutoscaler = {
  __typename?: 'VerticalPodAutoscaler';
  metadata: Metadata;
  spec: VerticalPodAutoscalerSpec;
  status?: Maybe<VerticalPodAutoscalerStatus>;
};

export type VerticalPodAutoscalerSpec = {
  __typename?: 'VerticalPodAutoscalerSpec';
  targetRef: CrossVersionResourceTarget;
  updatePolicy: VerticalPodAutoscalerUpdatePolicy;
};

export type VerticalPodAutoscalerStatus = {
  __typename?: 'VerticalPodAutoscalerStatus';
  recommendation?: Maybe<Recommendation>;
};

export type VerticalPodAutoscalerUpdatePolicy = {
  __typename?: 'VerticalPodAutoscalerUpdatePolicy';
  updateMode?: Maybe<Scalars['String']['output']>;
};

export type WaitingState = {
  __typename?: 'WaitingState';
  message?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
};

export type Webhook = {
  __typename?: 'Webhook';
  health: WebhookHealth;
  id: Scalars['ID']['output'];
  insertedAt?: Maybe<Scalars['DateTime']['output']>;
  type: WebhookType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type WebhookAttributes = {
  url: Scalars['String']['input'];
};

export type WebhookConnection = {
  __typename?: 'WebhookConnection';
  edges?: Maybe<Array<Maybe<WebhookEdge>>>;
  pageInfo: PageInfo;
};

export type WebhookEdge = {
  __typename?: 'WebhookEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Webhook>;
};

export enum WebhookHealth {
  Healthy = 'HEALTHY',
  Unhealthy = 'UNHEALTHY',
}

export enum WebhookType {
  Piazza = 'PIAZZA',
  Slack = 'SLACK',
}

export type WireguardPeer = {
  __typename?: 'WireguardPeer';
  config?: Maybe<Scalars['String']['output']>;
  metadata: Metadata;
  raw: Scalars['String']['output'];
  spec: WireguardPeerSpec;
  status?: Maybe<WireguardPeerStatus>;
  user?: Maybe<User>;
};

export type WireguardPeerSpec = {
  __typename?: 'WireguardPeerSpec';
  address?: Maybe<Scalars['String']['output']>;
  publicKey?: Maybe<Scalars['String']['output']>;
  wireguardRef?: Maybe<Scalars['String']['output']>;
};

export type WireguardPeerStatus = {
  __typename?: 'WireguardPeerStatus';
  conditions?: Maybe<Array<Maybe<StatusCondition>>>;
  ready?: Maybe<Scalars['Boolean']['output']>;
};

export type ServicesQueryVariables = Exact<{
  cluster: Scalars['String']['input'];
}>;

export type ServicesQuery = {
  __typename?: 'RootQueryType';
  serviceDeployments?: {
    __typename?: 'ServiceDeploymentConnection';
    edges?: Array<{
      __typename?: 'ServiceDeploymentEdge';
      node?: {
        __typename?: 'ServiceDeployment';
        id: string;
        name: string;
      } | null;
    } | null> | null;
  } | null;
};

export type CreatePullRequestPointerMutationVariables = Exact<{
  attributes: PullRequestAttributes;
}>;

export type CreatePullRequestPointerMutation = {
  __typename?: 'RootMutationType';
  createPullRequestPointer?: {
    __typename?: 'PullRequest';
    id: string;
    title?: string | null;
    insertedAt?: string | null;
  } | null;
};

export const ServicesDocument = gql`
  query Services($cluster: String!) {
    serviceDeployments(cluster: $cluster, first: 50) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

/**
 * __useServicesQuery__
 *
 * To run a query within a React component, call `useServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesQuery({
 *   variables: {
 *      cluster: // value for 'cluster'
 *   },
 * });
 */
export function useServicesQuery(
  baseOptions: Apollo.QueryHookOptions<ServicesQuery, ServicesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ServicesQuery, ServicesQueryVariables>(
    ServicesDocument,
    options,
  );
}
export function useServicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ServicesQuery,
    ServicesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ServicesQuery, ServicesQueryVariables>(
    ServicesDocument,
    options,
  );
}
export function useServicesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ServicesQuery,
    ServicesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ServicesQuery, ServicesQueryVariables>(
    ServicesDocument,
    options,
  );
}
export type ServicesQueryHookResult = ReturnType<typeof useServicesQuery>;
export type ServicesLazyQueryHookResult = ReturnType<
  typeof useServicesLazyQuery
>;
export type ServicesSuspenseQueryHookResult = ReturnType<
  typeof useServicesSuspenseQuery
>;
export type ServicesQueryResult = Apollo.QueryResult<
  ServicesQuery,
  ServicesQueryVariables
>;
export const CreatePullRequestPointerDocument = gql`
  mutation CreatePullRequestPointer($attributes: PullRequestAttributes!) {
    createPullRequestPointer(attributes: $attributes) {
      id
      title
      insertedAt
    }
  }
`;
export type CreatePullRequestPointerMutationFn = Apollo.MutationFunction<
  CreatePullRequestPointerMutation,
  CreatePullRequestPointerMutationVariables
>;

/**
 * __useCreatePullRequestPointerMutation__
 *
 * To run a mutation, you first call `useCreatePullRequestPointerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePullRequestPointerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPullRequestPointerMutation, { data, loading, error }] = useCreatePullRequestPointerMutation({
 *   variables: {
 *      attributes: // value for 'attributes'
 *   },
 * });
 */
export function useCreatePullRequestPointerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePullRequestPointerMutation,
    CreatePullRequestPointerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePullRequestPointerMutation,
    CreatePullRequestPointerMutationVariables
  >(CreatePullRequestPointerDocument, options);
}
export type CreatePullRequestPointerMutationHookResult = ReturnType<
  typeof useCreatePullRequestPointerMutation
>;
export type CreatePullRequestPointerMutationResult =
  Apollo.MutationResult<CreatePullRequestPointerMutation>;
export type CreatePullRequestPointerMutationOptions =
  Apollo.BaseMutationOptions<
    CreatePullRequestPointerMutation,
    CreatePullRequestPointerMutationVariables
  >;
export const namedOperations = {
  Query: {
    Services: 'Services',
  },
  Mutation: {
    CreatePullRequestPointer: 'CreatePullRequestPointer',
  },
};
