var createRadiodan = require('radiodan-client').create;

module.exports = function(state, onMessage) {
  var radiodan = createRadiodan();

  var powerButton = radiodan.button.get('power');
  powerButton.on('press', function () {
  });
  powerButton.on('release', function () {
    onMessage({
      type: 'power'
    });
  });

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
