const mongoose = require('mongoose');
const config = require('config');
const logger = require('../middleware/logger');

module.exports = function() {
  const options = {
    auth: {
      user: config.get('db.username'),
      password: config.get('db.password')
    },
    authSource: config.get('db.authSource')
  }
  mongoose.connect(config.get('db.url'), options)
    .then(() => logger.info('Connected to MongoDB...'));
}