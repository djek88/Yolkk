import AuthorSchema from './author.schema';
import PostSchema from './post.schema';

const RootQuerySchema = `
  type RootQuery {
    author(id: Int!): Author
    posts: [Post]
  }
`;

export default () => [RootQuerySchema, AuthorSchema, PostSchema];
