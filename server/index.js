const next = require('next');

const connectToDB = require('./db');
const { logger, startServer } = require('./config/');


const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dir: './app', dev });

nextApp
  .prepare()
  .then(() => startServer(nextApp))
  .then(connectToDB)
  .catch(err => {
    logger.error(`APP-FAILURE-START MESSAGE=${err.message}\nSTACK=${JSON.stringify(err.stack)}`);
    process.exit(1);
  });
