var express = require('express');
var http = require('http');
var join = require('path').join;

var optionallyLoadDevMiddleware = require('./dev-middleware');
var isDevelopment = process.env.NODE_ENV === 'development';

module.exports = function() {
  var app = express();
  var path = join(__dirname, '..', '..', isDevelopment === true ? 'static' : 'dist');
  app.use(express.static(path));

  // Load dev middleware in development, otherwise do nothing
  optionallyLoadDevMiddleware(app);

  return http.createServer(app);
}
