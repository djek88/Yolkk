import mongoose from 'mongoose';
import config from '../config';

mongoose.Promise = global.Promise;

export default mongoose;

mongoose.connect(config.db.uri);

mongoose.connection.on('open', () => console.log('Database connected...')); // eslint-disable-line no-console
mongoose.connection.on('error', err => console.error('Database error:', err.stack)); // eslint-disable-line no-console

process.on('SIGTERM', () => mongoose.connection.close());
