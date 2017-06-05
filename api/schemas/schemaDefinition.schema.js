import RootQuerySchema from './rootQuery.schema';

const SchemaDefinitionSchema = `
  schema {
    query: RootQuery
  }
`;

export default () => [SchemaDefinitionSchema, RootQuerySchema];
