var Baobab = require('baobab');
var assign = require('lodash/assign');

var fetchServicesAndSetState = require('./services').fetchAndSetState;
var config = require('../lib/config');
var assetServer = require('../servers/asset-server');
var apiServer = require('../servers/api-server');
var physicalUi = require('../servers/physical-ui');
var createPlayer = require('./player').create;
var profile = require('../lib/local-data').profile;
var magicTweet = require('./magic/tweet');

var initialState = {
  power: false,
  currentService: null,
  lastService: null,
  services: {},
  volume: 0,
  config: {},
  magic: {
    tweet: {
      oAuthToken: null,
      token: null
    }
  }
};

module.exports.create = function() {
  // Create a new state tree with config
  this.state = new Baobab(assign({}, initialState, {
    config: config(),
    lastService: profile.get('lastService')
  }));

  var player = createPlayer(handleStateChange.bind(null, this.state));

  physicalUi(this.state, handleMessage.bind(null, player, state));

  // Serve the web app
  var webPort = this.state.get('config', 'webPort');
  var server = assetServer();
  apiServer(server, state, handleMessage.bind(null, player, state));
  server.listen(webPort);

  console.log('Listening on ', webPort);

  player.status(); // triggers state change with current status

  fetchServicesAndSetState(this.state.select('config'), this.state.select('services'))
    .then(function (servicesById) {
      // Set a default service on startup so that pressing
      // power automatically plays a station
      if (this.state.select('lastService').get() === null) {
        const initialService = Object.keys(servicesById)[0];
        console.log('🙅 No service is set so setting ', initialService);
        state.select('lastService').set(initialService);
      }
    });

}

function isRadioOff(state) {
  return state.select('power').get() === false;
}

function handleStateChange(state, playerState) {
  var volume = parseInt(playerState.volume, 10);
  if (volume != null) {
    state.select('volume').set(volume);
  }
}

function handleMessage(player, state, msg) {
  console.log('Incoming message ', msg);
  switch (msg.type) {
    case 'serviceSelect':
      return serviceSelect(player, state, msg.data);
    case 'nextService':
      return nextService(player, state);
    case 'volume':
      return volume(player, state, { value: msg.data });
    case 'volumeUp':
      return volume(player, state, { diff: 5 });
    case 'volumeDown':
      return volume(player, state, { diff: -5 });
    case 'power':
      return power(player, state, msg.data);
    case 'tweet.connect-requested':
      return magicTweet.connect(state.select('magic', 'tweet'), player, msg.data);
    case 'tweet.oauth-verify':
      return magicTweet.verify(state.select('magic', 'tweet'), player, msg.data);
    case 'tweet.tweet':
      return magicTweet.trigger(state.select('magic', 'tweet'), player, msg.data);
    default:
      return console.warn('No handler for message type: ', msg.type, msg);
  }
}

function serviceSelect(player, state, id) {
  if (isRadioOff(state) === true) { return; }

  const playlist = state.select('services', id, 'playlist').get();
  player
    .stream(playlist)
    .then(() => {
      state.select('currentService').set(id);
      profile.set('lastService', id);
    });
}

function nextService(player, state) {
  if (isRadioOff(state) === true) { return; }

  const currentServiceId = state.select('currentService').get();
  const services = state.select('services').get();
  const servicesKeys = Object.keys(services);
  const indexOfService = servicesKeys.indexOf(currentServiceId);

  if (indexOfService > -1) {
    const nextServiceIndex = (indexOfService + 1) % servicesKeys.length;
    const nextServiceId = servicesKeys[nextServiceIndex];
    console.log('➡️ Next service: ', nextServiceIndex, nextServiceId);
    serviceSelect(player, state, nextServiceId);
  } else {
    console.error('Cannot find service ', currentServiceId, ' in list of all services');
  }
}

function volume(player, state, value) {
  return player.volume(value);
}

function power(player, state) {
  const isOn = !isRadioOff(state);
  const powerCursor = state.select('power');
  const lastServiceCursor = state.select('lastService');
  const currentServiceCursor = state.select('currentService');

  if (isOn == true) {
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
}
