const EventEmitter = require('events');

const emitter = new EventEmitter();
// Register a listener
emitter.on('messagedLogged', function() {
  console.log('Listener called');
});

// Raise an event
emitter.emit('messagedLogged');