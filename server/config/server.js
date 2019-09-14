const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');

require('./auth/google-strategy')(passport);
const routes = require('../routes');
const logger = require('./logger');


const startServer = nextApp => {
  const server = express();
  const PORT = process.env.PORT || 4000;

  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(passport.initialize());
  server.use(passport.session());

  routes.init(server, nextApp);

  server.listen(PORT, err => {
    if (err) throw err;
    logger.info(`APPLICATION STARTED ON PORT=${PORT}`);
  });
};

module.exports = startServer;
