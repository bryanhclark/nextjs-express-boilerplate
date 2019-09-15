require('dotenv').config();

const { COOKIE_EXPIRATION } = require('../../constants');

module.exports = {
  secret: process.env.COOKIE_SECRET,
  maxAge: COOKIE_EXPIRATION,
  httpOnly: true,
  saveUninitialized: true,
  resave: false,
};
