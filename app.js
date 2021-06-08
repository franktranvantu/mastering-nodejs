const EventEmitter = require('events');
const log = require('./logger');

const emitter = new EventEmitter();

// Register a listener
emitter.on('messagedLogged', arg => console.log(arg));

log('message');