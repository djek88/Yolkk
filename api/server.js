import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { isString } from 'lodash';
import { createServer } from 'http';

import schema from './schema';

// Arguments usually come from env vars
export function run({
  PORT: portFromEnv = 3010,
} = {}) {
  let port = portFromEnv;
  if (isString(portFromEnv)) {
    port = parseInt(portFromEnv, 10);
  }

  const app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/graphql', graphqlExpress((req) => {
    // Get the query, the same way express-graphql does it
    // https://github.com/graphql/express-graphql/blob/3fa6e68582d6d933d37fa9e841da5d2aa39261cd/src/index.js#L257
    const query = req.query.query || req.body.query;
    if (query && query.length > 2000) {
      // None of our app's queries are this long
      // Probably indicates someone trying to send an overly expensive query
      throw new Error('Query too large.');
    }

    return {
      schema,
      context: {
      },
    };
  }));

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));

  const server = createServer(app);

  server.listen(port, () => {
    console.log(`API Server is now running on http://localhost:${port}`); // eslint-disable-line no-console
  });

  return server;
}
