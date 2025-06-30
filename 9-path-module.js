const path = require("path");

console.log("PATH SEPARATOR\n");
console.log(path.sep);
console.log("----------------");

const filePath = path.join("/content", "/subfolder", "test.txt");
console.log("FILE PATH\n");
console.log(filePath);
console.log("----------------");

const base = path.basename(filePath);
console.log("FILE NAME \n");
console.log(base);
console.log("----------------");

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log("ABSOLUTE PATH \n");
console.log(absolute);
console.log("----------------");
