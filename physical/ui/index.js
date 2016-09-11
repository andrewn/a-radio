var five = require('johnny-five');
var EchoIO = require('./echo-io');
var Encoder = require('../lib/encoder');
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

  var types = ['Button', 'Led.RGB', 'Encoder'];

  var instances = {};
  types.forEach(function (type) {
    instances[type] = {};
  });

  var factories = {
    'Button': createButtonInstance,
    'Led.RGB': createLedRGBInstance,
    'Encoder': createEncoderInstance
  };

  board.on('ready', function() {
    console.log('Board is ready');

    types.forEach(function (type) {
      var specs = uiConfig[type];
      var factory = factories[type];
      if (specs && factory) {
        specs.forEach(function (spec) {
          instances[type][spec.id] = factory(spec, publisher, msgClient);
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

function createLedRGBInstance(spec, publisher, msgClient) {
  const id = spec.id;
  const config = spec.config;
  const topicKey = 'command.rgb-led.' + id;
  const workerId = 'radiodan-physical-ui-rgbled-' + id;

  const worker = msgClient.Worker.create(workerId);

  const rgb = five.Led.RGB(Object.assign({ id: id }, config));

  worker.addService({
    serviceType: 'rgb-led',
    serviceInstances: [id]
  });

  worker.ready();

  worker.events.on('request', function (req) {
    var stateChangePromise;

    console.log('RGBLED request', req);

    switch(req.command) {
      // case 'change':
      //   req.params.queue = req.params.queue || [];
      //
      //   stateChangePromise = promise.all(
      //     req.params.queue.map(function (params, index) {
      //       params.chain = index > 0;
      //       return changeRgbState(rgb, params);
      //     })
      //   );
      //   break;
      case 'status':
        stateChangePromise = Promise.resolve({ color: rgb.color() });
        break;
      default:
        rgb.color(req.params.color);
        stateChangePromise = Promise.resolve();
    }

    stateChangePromise.then(
      function () {
        worker.respond(req.sender, req.correlationId, {error: false});
      }
    );

  });

  return rgb;
}

function createEncoderInstance(spec, publisher) {
  const id = spec.id;
  const config = spec.config;
  const topicKey = 'event.rotary-encoder.' + id + '.turn';

  const encoder = Encoder(Object.assign({ id: id }, config));

  // the encoder will try to work out where in the loop you are
  encoder.on('change', function (evt) {
    publisher.publish(topicKey, evt);
  });
}
