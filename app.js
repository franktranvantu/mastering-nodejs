const EventEmitter = require('events');

const emitter = new EventEmitter();
// Register a listener
emitter.on('messagedLogged', arg => console.log(arg));

// Raise an event
emitter.emit('messagedLogged', {url: 'http://', id: 1});