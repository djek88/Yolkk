import { merge } from 'lodash';
import { GraphQLEmail, GraphQLDateTime } from 'graphql-custom-types';

const User = {
  Email: GraphQLEmail,
  Date: GraphQLDateTime,

  User: {
  },
};

export default merge(User);
