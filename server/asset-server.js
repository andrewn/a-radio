var express = require('express');
var http = require('http');
var join = require('path').join;

var optionallyLoadDevMiddleware = require('./dev-middleware');

module.exports = function() {
  var app = express();
  var path = join(__dirname, '..', 'static');
  app.use(express.static(path));

  // Load dev middleware in development, otherwise do nothing
  optionallyLoadDevMiddleware(app);

  return http.createServer(app);
}
