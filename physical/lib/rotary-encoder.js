// https://gist.github.com/rwaldron/5db750527f257636c5d3b2c492737c99

var Emitter = require("events").EventEmitter;
// var five = require("../lib/johnny-five.js");
var five = require("johnny-five");
// var board = new five.Board();
var emitter = new Emitter();


function Encoder(opts) {
  Emitter.call(this);

  var last = 0;
  var lValue = 0;
  var value = 0;
  var rotation = 0;

  five.Board.Component.call(
    this, opts = five.Board.Options(opts)
  );

  // var a = new five.Digital(opts.a);
  this.io.pinMode(opts.a, this.io.MODES.INPUT);
  this.io.digitalWrite(opts.a, this.io.HIGH);
  // var b = new five.Digital(opts.b);
  this.io.pinMode(opts.b, this.io.MODES.INPUT);
  this.io.digitalWrite(opts.b, this.io.HIGH);

  var a = null;
  var b = null;

  var handler = function() {

    // this.emit("data", this.value);

    var MSB = a //.value;
    var LSB = b //.value;
    var pos, turn;

    if (LSB === 1) {
      pos = MSB === 1 ? 0 : 1;
    } else {
      pos = MSB === 0 ? 2 : 3;
    }

    turn = pos - last;

    if (Math.abs(turn) !== 2) {
      if (turn === -1 || turn === 3) {
        value++;
      } else if (turn === 1 || turn === -3) {
        value--;
      }
    }

    last = pos;

    if (lValue !== value) {
      this.emit("change", value);
    }

    // if (value % 80 === 0 && value / 80 !== rotation) {
    //   rotation = value / 80;
    //   this.emit("rotation");
    // }

    lValue = value;
  }.bind(this);

  this.io.digitalRead(opts.a, function (val) { a = val; handler() });
  this.io.digitalRead(opts.b, function (val) { b = val; handler() });

  // a.on("data", handler);
  // b.on("data", handler);

  Object.defineProperties(this, {
    value: {
      get: function() {
        return value;
      }
    }
  });
}

Encoder.prototype = Object.create(Emitter.prototype, {
  constructor: {
    value: Encoder
  }
});

module.exports = Encoder;

/*
board.on("ready", function() {
  var encoder = new Encoder({
    a: 8,
    b: 9
  });

  var button = new five.Button(11);

  button.on("press", function() {
    console.log("pressed");
  });

  encoder.on("change", function() {
    console.log("Encoder At: %d", this.value);
  });

  encoder.on("rotation", function() {
    console.log("Rotations: %d", Math.abs(this.value / 80));
  });
});
*/
