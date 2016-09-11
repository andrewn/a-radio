var createRadiodan = require('radiodan-client').create;

module.exports = function(onMessage) {
  var radiodan = createRadiodan();

  var powerButton = radiodan.button.get('power');
  powerButton.on('press', function () {
  });
  powerButton.on('release', function () {
    onMessage({
      type: 'power'
    });
  });

  return {
    onState: (state) => console.log('State has changed')
  }
}
