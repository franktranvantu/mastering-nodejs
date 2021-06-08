const EventEmitter = require('events');
const emitter = new EventEmitter();

function log(message) {
  console.log(message);
  emitter.emit('messagedLogged', {url: 'http://', id: 1});
}

module.exports = log;