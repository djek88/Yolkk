import AuthorSchema from './author.schema';

const PostSchema = `
  scalar Date

  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
    createdAt: Date!
  }
`;

export default () => [PostSchema, AuthorSchema];
