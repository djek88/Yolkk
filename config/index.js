import dotenv from 'dotenv';

import common from './components/common';
import server from './components/server';

dotenv.config();

export default Object.assign({}, common(), server());
