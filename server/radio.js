var Baobab = require('baobab');
var assign = require('lodash/assign');

var fetchServicesAndSetState = require('./services').fetchAndSetState;
var config = require('./config');
var assetServer = require('./asset-server');
var apiServer = require('./api-server');

var initialState = {
  currentService: null,
  services: {},
  volume: null,
  config: {}
};

module.exports.create = function() {
  // Create a new state tree with config
  this.state = new Baobab(assign({}, initialState, {
    config: config()
  }));

  // Serve the web app
  var webPort = this.state.get('config', 'webPort');
  var server = assetServer();
  apiServer(server, state, handleMessage);
  server.listen(webPort);

  console.log('Listening on ', webPort);

  fetchServicesAndSetState(this.state.select('config'), this.state.select('services'));
}

function handleMessage(msg) {
  console.log('Incoming message ', msg);
}
