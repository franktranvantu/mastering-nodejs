const mongoose = require('mongoose');
const logger = require('../middleware/logger');

module.exports = function() {
  const options = {
    auth: {
      user: 'admin',
      password: 'admin'
    },
    authSource: 'admin'
  }
  mongoose.connect('mongodb://localhost/vidly', options)
    .then(() => logger.info('Connected to MongoDB...'));
}