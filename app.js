const Logger = require('./logger');

const logger = new Logger();

// Register a listener
logger.on('messagedLogged', arg => console.log(arg));

logger.log('message');