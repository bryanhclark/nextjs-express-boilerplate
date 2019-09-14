const { Schema } = require('mongoose');

module.exports = Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
});
