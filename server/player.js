var client = require('radiodan-client')

module.exports.create = function(onStateChange) {
  var radiodan = client.create();

  // Get the player object called `main`
  // as specified in ./config/radiodan-config.json
  var player = radiodan.player.get('main');
  var audio = radiodan.audio.get('default');

  player.on('state', onStateChange);

  return {
    stream: function(url) {
      return player
        .load({
          clear: true,
          playlist: url
        })
        .then(player.play);
    },
    volume: function(value) {
      return audio.volume({
        value: value
      });
    },
    stop: function() {
      return player.stop();
    }
  }
}
