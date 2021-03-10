import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {CAMPS_API_HOST} from '@env';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: `${CAMPS_API_HOST}/graphql`,
  // Use explicit `window.fetch` so tha outgoing requests
  // are captured and deferred until the Service Worker is ready.
  //@ts-ignore
  fetch: (...args) => fetch(...args),
});

const client = new ApolloClient({
  cache,
  link,
});

export {client};
