import { ApolloClient, InMemoryCache } from '@apollo/client';
import type { RenovateConfig } from '../../../config/types';

function useClient(config: RenovateConfig): ApolloClient<unknown> {
  if (!config.apiUrl || !config.apiToken) {
    throw new Error(`'--apiUrl' and '--apiToken' must be set`);
  }

  return new ApolloClient<unknown>({
    uri: config.apiUrl,
    cache: new InMemoryCache(),
    headers: {
      authorization: `Token ${config.apiToken}`,
    },
  });
}

export { useClient };
