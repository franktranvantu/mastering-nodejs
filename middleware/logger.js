const winston = require('winston');
require('winston-mongodb');

const options = {
  auth: {
    user: 'admin',
    password: 'admin'
  },
  authSource: 'admin'
}
module.exports = winston.createLogger({
  transports: [
    new winston.transports.File({filename: 'logs/logfile.log'}),
    new winston.transports.File({
      filename: 'logs/uncaughtExceptions.log',
      handleExceptions: true
    }),
    new winston.transports.MongoDB({
      level: 'info',
      db: 'mongodb://localhost/vidly',
      options
    })
  ]
});