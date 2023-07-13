const express = require("express");
const app = express();
const UserModel = require("../src/modules/user.model");

app.set("view engine", "ejs"); //Sets ejs as our view engine
app.set("views", "src/views");
app.use(express.json());
port = 8080;

app.get("/home", (req, res) => {
  res.contentType = "application/html";
  res.status(200).send("<h1>Hello World!</h>");
});

// Middleware
//It will "hold" all endpoints, therefore any requests for our app will first go inside of this
// app.use((req, res, next) => {
//   console.log(req.body);
//   console.log(`Content-Type:${req.headers["content-type"]}`);
//   console.log(`Request-Type :${req.method}`);

//   console.log(`Date: ${new Date()}`);
//   next();
// });

//creating views to the users, so we can display the outputs as html

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users });
});

//filters users by id and displays them
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Updates the user by id
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true }); // this other argument is used so that the res will be the new updated user.
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// gets all the users
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({}); //could've passed a filter here to filter only the users I want
    res.status(200).json(users); //could've passed a filter here to filter only the users I want
  } catch (error) {
    res.status.send(error.message);
  }
});

// creates a new user
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// deletes a user by his id

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndDelete(id);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log("running on 8080"));
