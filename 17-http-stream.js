const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const text = fs.readFileSync("./content/big.txt", "utf-8");
    return res.end(text);
  })
  .listen(3000);
