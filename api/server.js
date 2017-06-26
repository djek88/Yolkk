import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { printSchema } from 'graphql/utilities/schemaPrinter';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createServer } from 'http';
import config from '../config';

import schema from './schema';

export function run() {
  const app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/schema', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(printSchema(schema));
  });

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
      rootValue: {
        rootTestProperty: 'rootTestProperty',
      },
      debug: config.env !== 'production',
    };
  }));

  if (config.env !== 'production') {
    app.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql',
    }));
  }

  const server = createServer(app);

  server.listen(config.server.port, () => {
    console.log(`API Server is now running on http://localhost:${config.server.port}`); // eslint-disable-line no-console
  });

  process.on('SIGTERM', () => server.close());

  return server;
}
