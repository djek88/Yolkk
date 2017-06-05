import { merge } from 'lodash';

import Post from './post.resolver';

const Author = {
  Author: {
  },
};

export default merge(Author, Post);
