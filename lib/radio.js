var fetchServicesAndSetState = require('./services').fetchAndSetState;
var config = require('./config');
var Bibimbap = require('bibimbap');

var initialState = {
  currentService: null,
  services: {},
  volume: null
};

module.exports.create = function() {
  this.config = config();
  this.state = new Bibimbap(initialState);
  fetchServicesAndSetState(this.config, this.state.cursor().select('services'));
  this.state.on('commit', emitStateChange);
}

function emitStateChange(newState) {
  console.log('State: ', newState);
}
