const startServer = require('./server');
const logger = require('./logger');
const connectToDB = require('./db');

module.exports = {
  connectToDB,
  logger,
  startServer,
};
