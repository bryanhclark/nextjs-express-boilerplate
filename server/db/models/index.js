const User = require('./User');

module.exports = mongooseConnection => ({
  User: mongooseConnection.model('User', User)
});
