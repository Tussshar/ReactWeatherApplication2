// In require we have to enter the name of the module. With this we will have
//  access to entire express API.
var express = require('express')

// Create our app
// To create the app call express library without passing any parameter.
var app = express();

// Tell the folder in which you want to serve.
// app.use lets you add functioanality to your express application.
// express.static is going to specify a folder name that we want to expose
// to the web server.
app.use(express.static('public'));

// start the server
// listen takes 2 arguments. port and a function which will get called
// once the server is up.
app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});