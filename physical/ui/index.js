var five = require('johnny-five');
var EchoIO = require('./echo-io');
var MessagingClient = require('radiodan-client').MessagingClient;

var IO = null;

try {
  IO = require('raspi-io');
} catch(err) {
  console.error('Raspi-io not found, falling back to EchoIO');
  console.error(err);
  IO = EchoIO;
}

var uiConfig = require('../../config/physical-config.json');

module.exports.create = function () {
  const io = new IO();
  const msgClient = MessagingClient.create();
  const publisher = msgClient.Publisher.create();

  var board = new five.Board({
    io: io,
    repl: false
  });

  var types = ['Button', 'Led.RGB'];

  var instances = {};
  types.forEach(function (type) {
    instances[type] = {};
  });

  var factories = {
    'Button': createButtonInstance,
    'Led.RGB': createLedRGBInstance,
  };

  board.on('ready', function() {
    console.log('Board is ready');

    types.forEach(function (type) {
      var specs = uiConfig[type];
      var factory = factories[type];
      if (specs && factory) {
        specs.forEach(function (spec) {
          instances[type][spec.id] = factory(spec, publisher);
        });
      } else {
        console.error("No config or factory for component type: ", type);
      }
    })

    if (this.repl) {
      this.repl.inject(Object.assign(
        { io: io, five: five },
        instances
      ));
    }
  });
}

function createButtonInstance(spec, publisher) {
  const id = spec.id;
  const config = spec.config;
  const topicKey = 'event.button.' + id;
  const button = new five.Button(Object.assign({ id: id }, config));

  button.on("press", function() {
    console.log( id + ": Button pressed" );
    publisher.publish(topicKey + '.press', { pressed: true });
  });

  button.on("hold", function() {
    console.log( id + ": Button held" );
    publisher.publish(topicKey + '.hold', { pressed: true, durationMs: button.holdtime });
  });

  button.on("release", function() {
    console.log( id + ": Button released" );
    publisher.publish(topicKey + '.release', { pressed: false });
  });

  return button;
};

function createLedRGBInstance(spec, publisher) {
  const id = spec.id;
  const config = spec.config;

  const rgb = five.Led.RGB(Object.assign({ id: id }, config));

  return rgb;
}
