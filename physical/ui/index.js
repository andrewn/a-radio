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

  var instances = {
    Button: {}
  };

  board.on('ready', function() {
    console.log('Board is ready');

    // instances.button = new five.Button({ pin: 7, invert: false, pulldown: true });
    //
    // instances.button.on('press', () => console.log('pressed!'));

    uiConfig.Button.map(function (btn) {
      const id = btn.id;
      const config = btn.config;

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

      instances.Button[id] = button;
    });

    this.repl.inject(Object.assign(
      { io: io, five: five },
      instances
    ));
  });
}
