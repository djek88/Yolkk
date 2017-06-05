import { merge } from 'lodash';
import { GraphQLDateTime } from 'graphql-custom-types';

const Medicament = {
  Date: GraphQLDateTime,

  Medicament: {
  },
};

export default merge(Medicament);
