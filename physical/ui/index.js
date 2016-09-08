var five = require('johnny-five');
var EchoIO = require('./echo-io');

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

  var board = new five.Board({
    io: io
  });

  var types = ['Button'/*, 'LED.RGB'*/];

  var instances = {};
  types.forEach(function (type) {
    instances[type] = {};
  });

  var factories = {
    'Button': createButtonInstance
  }

  board.on('ready', function() {
    console.log('Board is ready');

    types.forEach(function (type) {
      var specs = uiConfig[type];
      var factory = factories[type];
      if (specs && factory) {
        specs.forEach(function (spec) {
          instances[type] = factory(spec);
        });
      }
    })

    this.repl.inject(Object.assign(
      { io: io, five: five },
      instances
    ));
  });
}

function createButtonInstance(spec) {
  const id = spec.id;
  const config = spec.config;
  const button = new five.Button(Object.assign({ id: id }, config));

  button.on("hold", function() {
    console.log( id + ": Button held" );
  });

  button.on("press", function() {
    console.log( id + ": Button pressed" );
  });

  button.on("release", function() {
    console.log( id + ": Button released" );
  });

  return button;
};
