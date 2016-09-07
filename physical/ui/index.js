var five = require('johnny-five');
var EchoIO = require('./echo-io');

module.exports.create = function () {
  var board = new five.Board({
    io: new EchoIO()
  });

  board.on('ready', function() {
    console.log('Board is ready');

    
  });
}
