import PostSchema from './post.schema';

const AuthorShema = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post]
  }
`;

export default () => [AuthorShema, PostSchema];
