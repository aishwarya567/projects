const {fibonacci_series}  = require('./fibnacci');
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('accepted', (n) => {
    console.log(fibonacci_series(10));
})
emitter.emit('accepted');