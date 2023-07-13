const fs = require("fs");
const path = require("path");

// create a folder

// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Error:", error);
//   }
//   console.log(`Your folder ${path.join(__dirname, "/test")} has been created!`);
// });

// create file
fs.writeFile(
  path.join(__dirname + "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("error:", error);
    }
    console.log("Your file has been created! ");
  }
);

// add info to file

fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello There!",
  (error) => {
    if (error) {
      return console.log("Error:", error);
    }
    console.log("Great! ");
  }
);

// Reading files
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Error:", error);
    }
    console.log(data);
  }
);

// The way people actually run these commands to create, update and read files is as follows:
file = path.join(__dirname, "/test", "test2.txt");
data = { data: null };

fs.writeFile(file, "Hello there!", (error) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log("The file has been created!");
  fs.appendFile(file, "New information!", (error) => {
    if (error) {
      return console.log("error", error);
    }
  });

  fs.readFile(file, (error, data) => {
    if (error) {
      console.log("Error:", error);
    }
    data.data = data;
  });
});
console.log(data);
