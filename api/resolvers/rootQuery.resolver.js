import { merge } from 'lodash';

import Author from './author.resolver';
import Post from './post.resolver';

const RootQuery = {
};

export default merge(RootQuery, Author, Post);
