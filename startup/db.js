const mongoose = require('mongoose');
const config = require('config');
const logger = require('../middleware/logger');

module.exports = function() {
  const options = {
    auth: {
      user: config.get('db_username'),
      password: config.get('db_password')
    },
    authSource: config.get('db_authSource')
  }
  mongoose.connect(config.get('db_url'), options)
    .then(() => logger.info('Connected to MongoDB...'));
}