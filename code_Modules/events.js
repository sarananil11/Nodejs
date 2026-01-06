const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
// EventEmitter should be used by calling it to anither function.

eventEmitter.on('greet', (name) => {
    console.log("hello", name);

});
eventEmitter.emit('greet', 'Meenu');