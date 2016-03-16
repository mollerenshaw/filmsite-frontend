/* This global thing tells jslint that 'require' was defined elsewhere (i.e. in NodeJS) */
/* global require */
var express      = require('express');
var staticRouter = require('./routes/staticRouter');

// Create an instance of the app using Express.
var staticFrontEnd = express();

// invoked for any request passed to the app.
staticFrontEnd.use(function (req, res, next) {
  console.log("Received an HTTP request: " + req.url);
  next();
});

// SET UP ROUTES.
staticFrontEnd.use('/', staticRouter);

// START THE SERVER
var DEFAULT_PORT = 8080;
var port = process.env.PORT || DEFAULT_PORT;
staticFrontEnd.listen(port);

console.info('Film Site Static content served on port ' + port);
