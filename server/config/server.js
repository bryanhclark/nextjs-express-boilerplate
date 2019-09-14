const express = require('express');
const routes = require('../routes');
const logger = require('./logger');

const startServer = nextApp => {
  const server = express();
  const PORT = process.env.PORT || 3000;

  routes.init(server, nextApp);

  server.listen(PORT, err => {
    if (err) throw err;
    logger.info(`APPLICATION STARTED ON PORT=${PORT}`);
  });
};

module.exports = startServer;
