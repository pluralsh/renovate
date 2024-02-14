import { ApolloClient, InMemoryCache } from '@apollo/client';
import type { RenovateConfig } from '../../../config/types';

function useClient(config: RenovateConfig): ApolloClient<unknown> {
  if (!config.apiUrl || !config.apiToken) {
    throw new Error(`'--apiUrl' and '--apiToken' must be set`);
  }

  const uri = new URL(
    config.apiUrl.startsWith('http')
      ? config.apiUrl
      : `https://${config.apiUrl}`,
  ).href;

  return new ApolloClient<unknown>({
    uri,
    cache: new InMemoryCache(),
    headers: {
      authorization: `Token ${config.apiToken}`,
    },
  });
}

export { useClient };
