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

const mocks = {
  Email: () => 'test@email.ru',
  DateTime: () => new Date(),
};

addMockFunctionsToSchema({
  schema,
  mocks,
  preserveResolvers: false,
});

schema._typeMap.Email._scalarConfig.serialize = () => mocks.Email(); // eslint-disable-line no-underscore-dangle, max-len

export default schema;
