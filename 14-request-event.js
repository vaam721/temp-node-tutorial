const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// });

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribes, listens, responds to it
// server has 'on' method
server.on("request", (req, res) => {
  return res.end("Welcome");
});

server.listen(3000);
