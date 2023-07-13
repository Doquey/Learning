const http = require("http");

const port = 8080;

// Creating our server
// this req.url == "/home" is used to check if our request found a url == "/home". If it did we
// do a GET like response using the .end and return to the user a html page.
// we can define the url in the go. For example when we passed if req.url ==home, it means that if the user goes to the port the server
// is running on and type /home, they will get back the GET response we set up.

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home page!</>");
  }
  if (req.url == "/page") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello there! </>");
  }

  if (req.url == "/users") {
    const users = [
      {
        name: "Jefferson",
        age: 32,
        occupation: "Sex worker",
      },
      {
        name: "Rogerio",
        age: 25,
        occupation: "lonely wolf",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

module.export = { server };

server.listen(port, () => console.log("Listening to the server we created! "));
