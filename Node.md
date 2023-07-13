# Brief Tutorial what is and how to use Node.Js

- What is Node.Js
- Why Node.js
- What are modules
- Using Node.js

## What is Node.js

Its a backend Engine that lets use run javascript code output of a browser. Node.js is a single threaded, non blocking engine.
The meaning of being non blocking is that it lets us make tons of requests at the same time, even though it only has one thread to process it.
It works like a waiter in a restaurant. It gets the request, sends it to his engine (google's V8) and then go back to get another request and the single continues.
When the requested item is processed it goes back in the engine and brings the output for the client.


## Why Node.js

- Because Node is a single threaded engine, its very light to deploy on any machine. 
- Node is very popular among companies.
- Node is used to develope back-end of applications in javascript. Since javascript is very used in the front-end of applications as well
- Its easiear for teams to handle a backend using Node, since its all javascript.
- The Npm is another plus when using Node. Just like when using python pip is a very usefull tool.


## Modules in the javascript context is pretty much the same as in python. In python we use pip to install dependencies and libraries we wanna use from 3rd parties.
In javascript we use Node package manager (NPM). Npm lets us make our Back-End and front-end development way easiear, because we do not need to code everything from scratch.
Most things people have already writen modules for. We just need to use them.


## Using node.js

Running javascript using node:
- node file.js
  
Using Npm: 
- npm init
- npm install express  -> Installs locally , need to install per project.
- npm install -g nodemon -> installs globally, can be used in any javascript project.
- Scripts: The scripts inside the package.son are ways for us to run certain, customized scripts like nodemon index.js, first we need to create a name for the script like "start:dev" then we pass what is to be run. Then we do a npm run script.

Exporting modules:
- First we create some class or function inside a javascript file.
- Then we call a module.exports = { our classes/function/variables}
- It seems its very commum when using node and javascript in general, to create files to import our raw modules in that file and then use this file as the module itself.

Using Exported modules:
- To import the modules we do : const {something} = require("./filewiththeclass");
- We use the {} to have our something be the class itself and not an object with the class inside of it.
- When we install a module in our dev enviroment, the module becomes a dependency of the project inside the package.json file.
- When we install a module, node will install and of that module's dependencies inside the node_modules file. We do not upload this file to github, so it goes inside the gitignore file. And we don't need to upload this node_modules folder anyway, because If our project has the package.json file, when we run a npm install, all the projects dependencies ,and their respective dependencies as well, are going to be installed by node.

- In case we don't want to attribute our module to a variable, we can just do require('module'); This can be used when we are not exporting nothing from our module, but instead using it as a librarie.

  
Some useful modules:
- nodemon -> Whenever we change something in a javascript file, we need to reinitialize the dev server we are runing in order to that change to take effect. Using this module the initialization happens whenever we do a save in the file.
- path -> This modules lets us output files names and directories to be used in our code. We can import it using require('path') and attribute it to an object. This path object will have some methods that lets us get information about paths in our enviroment.
- FS -> This is a module that can be used to manipulate files in javascript. The combination of path + fs is very similar to os + shutil in python.
- Http - > Module used to help us create a server using node.
- Express -> Same thing as Http, but this is not a vanilla module and therefore it makes our life easiear, because it has many things implemented that was done by developers.

Creating a server using HTTP:
- We start creating a port
- Then we instantiate a http.createServer function.
- Then we need to get the (req,res) that are parameters for the server and use them in a function that will act as handling the response for a request.
- We can use an if statement to check if the req.url is equal to some url we think of, and if it is then we can give a response to the user that acess that url.

Creating a server using express:
- Its way easier
- We need to setup the port and the listen command as we did with the http;
- We instantiate express to a "app" const
- Since in the http example we only used the user entering an url, meaning we only used the GET response, to use it here as well we set the app.get function

Creating a mongodb database:
- https://www.mongodb.com/atlas/database  create a cluster here
- mongoose -> We'll be using this module to connect to the cluster
- Connecting to the database -> use the mongoose.connect and pass in the link to the database, We also need to create a .env file to hold the enviromental variables so that we don't pass our password and user in the code directly. To use these variables inside .env we need to install the .env module for javascript.
- After installing and importing the dotenv library, we just need to call it inside the index function dotenv.config and we good to use the env variables in our code.

Creating the schemas for our database:
- We first create a folder called modules inside src
- We will then instantiate the schemas for each model we are going to deploy to the database inside this folder.
- Usually the models are going to be something like this user.model.js and inside of it we'll have a mongoose schema for the model.

Creating the first endpoint:
- We need one end point that will include a user in the database. The request we are going to make to this url are of type post.
- We create the post request using the app from express
- Then we'll use postman to make the post requests. We need to go inside the postman app, and create a new collection, a new request and place the body of our request there, that is going to be in the schema of the model we created.
