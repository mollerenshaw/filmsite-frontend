/* This global thing tells jslint that 'require' was defined elsewhere (i.e. in NodeJS) */
/* global require */
const express = require('express');
const logger = require('./util/log');

// Create an instance of the app using Express.
var staticFrontEnd = express();

// invoked for any request passed to the app.
staticFrontEnd.use(function (req, res, next) {
  logger.info("Received an HTTP request: " + req.url);
  next();
});

var librariesDirectory = __dirname + "/bower_components";
var staticContentDirectory = __dirname + "/site";

// SET UP ROUTES.
staticFrontEnd.use("/libs", express.static(librariesDirectory));
staticFrontEnd.use("/static", express.static(staticContentDirectory));

logger.info("Serving external libraries from " + librariesDirectory);
logger.info("Serving static content from " + staticContentDirectory);

// START THE SERVER
var DEFAULT_PORT = 8080;
var port = process.env.PORT || DEFAULT_PORT;
staticFrontEnd.listen(port);

logger.info('Film Site Static content served on port ' + port);
