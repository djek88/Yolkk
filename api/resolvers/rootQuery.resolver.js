import { merge } from 'lodash';

import User from './user.resolver';

const RootQuery = {
};

export default merge(RootQuery, User);
