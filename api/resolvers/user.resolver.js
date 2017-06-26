import { merge } from 'lodash';
import { GraphQLEmail, GraphQLDateTime } from 'graphql-custom-types';

const User = {
  Email: GraphQLEmail,
  Date: GraphQLDateTime,

  User: {
    // for argument testing purposes (i.e. responce not correct when email argument is not valid)
    email(obj, { email }) {
      return email;
    },
  },
};

export default merge(User);
