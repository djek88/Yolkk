import { merge } from 'lodash';

import { GraphQLDateTime } from 'graphql-custom-types';
import Author from './author.resolver';

const Post = {
  Date: GraphQLDateTime,

  Post: {
  },
};

export default merge(Post, Author);
