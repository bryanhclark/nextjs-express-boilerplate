const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const session = require('express-session');

require('./auth/google-strategy')(passport);
const routes = require('../routes');
const logger = require('./logger');
const sessionOptions = require('./session');


const startServer = nextApp => {
  const server = express();
  const PORT = process.env.PORT || 4000;
  const isProduction = process.env.NODE_ENV === 'production';

  server.use(compression());
  server.use(helmet());
  server.use(morgan(isProduction ? 'short' : 'dev'));
  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(session(sessionOptions));
  server.use(passport.initialize());
  server.use(passport.session());

  routes.init(server, nextApp);

  server.listen(PORT, err => {
    if (err) throw err;
    logger.info(`APPLICATION STARTED ON PORT=${PORT}`);
  });
};

module.exports = startServer;
