const mongoose = require('mongoose');
require('dotenv').config();

const User = mongoose.model('User', {
  email: String,
  password: String,
});

module.exports = async () => {
  try {
    await mongoose.connect(`mongodb://${process.env.MONGODB_URL}`, { useNewUrlParser: true });
  } catch (err) {
    if (err) throw err;
  };
};
