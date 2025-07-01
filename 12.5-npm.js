// npm - global command that comes with node
// npm --version

//  local dependency - use it only in this project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// dev dependencies
// npm i <packageName> -D
// npm i <packageName> --save-dev

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (sets everthing to default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("nodemon is indeed working");
