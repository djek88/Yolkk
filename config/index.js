import dotenv from 'dotenv';

import common from './components/common';
import server from './components/server';
import db from './components/db';

dotenv.config();

export default Object.assign({}, common(), server(), db());
