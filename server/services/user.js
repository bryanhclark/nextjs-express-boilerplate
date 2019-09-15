const mongoose = require('mongoose');

const { User } = require('../db/models')(mongoose);
const { logger } = require('../config');

const getUserById = async userId => {
  try {
    const projection = `firstName lastName email`;
    const user = await User.findById(userId, projection);
    return user;
  } catch (err) {
    logger.error(`ERROR FETCHING USER w/ ID ${userId} MESSAGE=${err.message}`);
  }
};

module.exports = {
  getUserById,
};
