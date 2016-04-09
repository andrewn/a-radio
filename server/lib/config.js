var forEach = require('lodash/forEach');

var config = require('../../config/radio.json');

module.exports = function() {
  var config = {
    bbcServicesApi: get('BBC_SERVICES_API'),
    webPort: get('WEB_PORT')
  };

  validate(config);

  return config;
}

function get(key) {
  var fromConfig = config[key];
  return fromConfig != null ? fromConfig : process.env[key];
}

function validate(config) {
  forEach(config, function(item, key) {
    if (item === null || item === undefined) {
      throw new Error('config key "' + key + '" is not set - check lib/config.js');
    }
  })
}
