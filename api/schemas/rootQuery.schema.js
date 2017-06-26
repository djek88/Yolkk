import UserSchema from './user.schema';

const RootQuerySchema = `
  type RootQuery {
    users: [User!]!
  }
`;

export default () => [RootQuerySchema, UserSchema];
