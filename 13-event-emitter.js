// 'events' gives a class
const EventEmitter = require("events");

// can create a custom class by making an instance of the EventEmitter class
const customEmitter = new EventEmitter();

// 'on' method - listens for an event
// .on(<eventName>, <callback function (accepts arguments)>)
customEmitter.on("response", (name, id) => {
  console.log(`data received. ${name} - ${id}`);
});
customEmitter.on("response", () => {
  console.log(`data TOTALLY received`);
});

// 'emit' method - emits an event
// .emit(<eventName>, <arguments [optional]>)
customEmitter.emit("response", "adrian", 22);
