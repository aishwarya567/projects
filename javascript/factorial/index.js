const {factorial} = require('./node');
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('accepted', (number) => {
    console.log(factorial(4));
})
emitter.emit('accepted');




