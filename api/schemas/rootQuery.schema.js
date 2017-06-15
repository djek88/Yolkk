import AuthorSchema from './author.schema';
import PostSchema from './post.schema';
import UserSchema from './user.schema';

const RootQuerySchema = `
  type RootQuery {
    author(id: Int!): Author
    posts: [Post]
    users: [User!]!
  }
`;

export default () => [RootQuerySchema, AuthorSchema, PostSchema, UserSchema];
