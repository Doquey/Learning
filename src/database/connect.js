const mongoose = require("mongoose");

const user = process.env.MONGODB_USER_NAME;
const password = process.env.MONGODB_PASSWORD;

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${user}:${password}@databasetutorial.cz6xotb.mongodb.net/?retryWrites=true&w=majority`
  );
};

module.exports = connectToDatabase;
