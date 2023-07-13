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

Using Npm: 
- npm init
- npm install express  -> Installs locally , need to install per project.
- npm -g install nodemon -> installs globally, can be used in any javascript project.




