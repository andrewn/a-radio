var express = require('express');
var http = require('http');
var join = require('path').join;

module.exports = function() {
  var app = express();
  var path = join(__dirname, '..', 'static');
  app.use(express.static(path));
  return http.createServer(app);
}
