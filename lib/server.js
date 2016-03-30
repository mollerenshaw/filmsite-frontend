/* This global thing tells jslint that 'require' was defined elsewhere (i.e. in NodeJS) */
/* global require */
var express = require('express');

// Create an instance of the app using Express.
var staticFrontEnd = express();

// invoked for any request passed to the app.
staticFrontEnd.use(function (req, res, next) {
  console.log("Received an HTTP request: " + req.url);
  next();
});

var librariesDirectory = __dirname + "/bower_components";
var staticContentDirectory = __dirname + "/site";

// SET UP ROUTES.
staticFrontEnd.use("/libs", express.static(librariesDirectory));
staticFrontEnd.use("/static", express.static(staticContentDirectory));

console.log("Serving external libraries from " + librariesDirectory);
console.log("Serving static content from " + staticContentDirectory);

// START THE SERVER
var DEFAULT_PORT = 8080;
var port = process.env.PORT || DEFAULT_PORT;
staticFrontEnd.listen(port);

console.info('Film Site Static content served on port ' + port);
