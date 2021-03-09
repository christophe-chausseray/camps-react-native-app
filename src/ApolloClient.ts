import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: `${process.env.CAMPS_API_HOST}/graphql`,
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
