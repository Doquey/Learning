require("dotenv").config();
const connectToDatabase = require("./src/database/connect");

require("./modules/express.js");

connectToDatabase();
