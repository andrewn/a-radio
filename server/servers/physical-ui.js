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

  var magicButton = radiodan.button.get('magic');
  magicButton.on('release', function () {
    onMessage({
      type: 'tweet.tweet',
      data: {
        mood: magicMood
      }
    });
    updateMagicLedOnPower(powerCursor.get());
  });

  // Dials
  var lastPowerValue = 0;
  var powerDial = radiodan.rotaryEncoder.get('power');
  powerDial.on('turn', function (evt) {
    // console.log('turn', evt.value);
    if ((evt.value % 10) === 0) {
      if (evt.value > lastPowerValue) {
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
      lastPowerValue = evt.value;
    }
  });

  // TODO: Turning should have 3 points and start in
  //       the middle point (i.e. neutral)
  var lastMagicValue = 0;
  var magicMood = 'neutral';
  var magicDial = radiodan.rotaryEncoder.get('magic');
  magicDial.on('turn', function (evt) {
    if ((evt.value % 10) === 0) {
      if (evt.value > lastMagicValue) {
        console.log('Positive tweet indication');
        magicLed.emit({ color: 'green' });
        magicMood = 'positive';
        // TODO: Set timeout to reset
      } else {
        console.log('Negative tweet indication');
        magicLed.emit({ color: 'red' });
        magicMood = 'negative';
        // TODO: Set timeout to reset
      }
      lastMagicValue = evt.value;
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

  var magicLed = radiodan.RGBLED.get('magic');

  powerCursor.on('update', function (evt) {
    updateMagicLedOnPower(evt.data.currentData);
  });

  updateMagicLedOnPower(powerCursor.get());

  function updateMagicLedOnPower(powerState) {
    if (powerState === true) {
      magicLed.emit({ color: 'blue', on: true });
    } else {
      magicLed.emit({ color: 'blue', on: false });
    }
  }

  return {
    onState: (state) => console.log('State has changed')
  }
}
