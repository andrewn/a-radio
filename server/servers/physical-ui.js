var createRadiodan = require('radiodan-client').create;

module.exports = function(state, onMessage) {
  var radiodan = createRadiodan();

  // Buttons
  var powerButton = radiodan.button.get('power');
  powerButton.on('release', function () {
    onMessage({
      type: 'power'
    });
  });

  var nextButton = radiodan.button.get('next');
  nextButton.on('release', function () {
    onMessage({
      type: 'nextService'
    });
  });

  // Dials
  var lastValue = 0;
  var powerDial = radiodan.rotaryEncoder.get('power');
  powerDial.on('turn', function (evt) {
    // console.log('turn', evt.value);
    if ((evt.value % 10) === 0) {
      if (evt.value > lastValue) {
        console.log('Triggering volume increment +');
        onMessage({
          type: 'volumeUp'
        });
      } else {
        console.log('Triggering volume decrement -');
        onMessage({
          type: 'volumeDown'
        });
      }
      lastValue = evt.value;
    }
  });

  // LEDs
  var powerLed = radiodan.RGBLED.get('power');

  var powerCursor = state.select('power')

  powerCursor.on('update', function (evt) {
    updatePowerLed(evt.data.currentData);
  });

  // Set to initial state
  updatePowerLed(powerCursor.get());

  function updatePowerLed(powerState) {
    console.log('updatePowerLed()', powerState);
    switch (powerState) {
      case true:
        powerLed.emit({ color: 'green' });
        break;
      case false:
        powerLed.emit({ color: 'red' });
        break;
    }
  }

  return {
    onState: (state) => console.log('State has changed')
  }
}
