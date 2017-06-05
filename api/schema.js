import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import typeDefs from './schemas';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,

   // =true if we mock data, because resolved data object is allowed to contain undefined,
   // e.i any property may not exist, or be undefined
  allowUndefinedInResolve: true,
  logger: { log: e => console.error(e.stack) }, // eslint-disable-line no-console
});

addMockFunctionsToSchema({
  schema,
  mocks: {
    Date: () => new Date(),
  },
  preserveResolvers: false,
});

export default schema;
