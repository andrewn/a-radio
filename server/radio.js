var Baobab = require('baobab');
var assign = require('lodash/assign');

var fetchServicesAndSetState = require('./services').fetchAndSetState;
var config = require('./config');
var assetServer = require('./asset-server');
var apiServer = require('./api-server');
var createPlayer = require('./player').create;

var initialState = {
  power: false,
  currentService: null,
  lastService: null,
  services: {},
  volume: 0,
  config: {}
};

module.exports.create = function() {
  // Create a new state tree with config
  this.state = new Baobab(assign({}, initialState, {
    config: config()
  }));

  var player = createPlayer(handleStateChange.bind(null, this.state));

  // Serve the web app
  var webPort = this.state.get('config', 'webPort');
  var server = assetServer();
  apiServer(server, state, handleMessage.bind(null, player, state));
  server.listen(webPort);

  console.log('Listening on ', webPort);

  fetchServicesAndSetState(this.state.select('config'), this.state.select('services'));
}

function handleStateChange(state, playerState) {
  console.log('playerState', playerState);
}

function handleMessage(player, state, msg) {
  console.log('Incoming message ', msg);
  switch (msg.type) {
    case 'serviceSelect':
      return serviceSelect(player, state, msg.data);
    case 'volume':
      return volume(player, state, msg.data);
    case 'power':
      return power(player, state, msg.data);
    default:
      return console.warn('No handler for message type: ', msg.type, msg);
  }
}

function serviceSelect(player, state, id) {
  const powerValue = state.select('power').get();
  if (powerValue === false) {
    power(player, state);
  }
  const playlist = state.select('services', id, 'playlist').get();
  player
    .stream(playlist)
    .then(() => state.select('currentService').set(id));
}

function volume(player, state, value) {
  return player.volume(value);
}

function power(player, state) {
  const powerCursor = state.select('power');
  const lastServiceCursor = state.select('lastService');
  const currentServiceCursor = state.select('currentService');

  if (powerCursor.get() === true) {
    player.stop();
    powerCursor.set(false);
    // remember last service
    lastServiceCursor.set(currentServiceCursor.get());
  } else {
    powerCursor.set(true);

    if (lastServiceCursor.get()) {
      serviceSelect(player, state, lastServiceCursor.get());
    }
  }
// const powerCursor = state.select('power');
// const power = cursor.get();
// const currentService = state.select('currentService').get();
// const lastServiceCursor = state.select('lastService');
// const lastService = lastServiceCursor.get();
// if (power === true) {
//   player.stop();
//   powerCursor.set(false);
//   lastServiceCursor.set(currentService);
// } else if (lastService != null) {
//   serviceSelect(player, state, lastService);
//   powerCursor.set(true);
// }
}
