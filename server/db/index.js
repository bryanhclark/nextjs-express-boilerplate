require('dotenv').config();
const mongoose = require('mongoose');
require('./models')(mongoose);

module.exports = async () => {
  try {
    await mongoose.connect(`mongodb://${process.env.MONGODB_URL}`, {
      useNewUrlParser: true, useUnifiedTopology: true
    });
  } catch (err) {
    if (err) throw err;
  };
};
