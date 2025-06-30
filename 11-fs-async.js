const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/third.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const third = result;
  console.log("--- third.txt ---");
  console.log(result);

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/second-async.txt",
      `this was created asynchronously\n\nlook at this:\n3.${third}\n\n2.${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        readFile("./content/second-async.txt", "utf-8", (err, result) => {
          console.log("--- second-async.txt ---");
          console.log(result);
        });
        console.log("done with this task");
      }
    );
  });
});

console.log("starting new task");
