module.exports = function(initialConfig) {
  var config = initialConfig || {};
  return {
    get: function(key) {
      var fromConfig = config[key];
      return fromConfig != null ? fromConfig : process.env[key];
    }
  }
}
