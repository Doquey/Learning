const path = require("path");

//gets the base file name
console.log(path.basename(__filename));

//gets the dirname for the current file
console.log(path.dirname(__filename));

// gets the extention name for the current file
console.log(path.extname(__filename));

// creates an javascript object with the files information
console.log(path.parse(__filename));

//puting paths togather, very similar to os.path.join

console.log(path.join(__dirname, __filename));
