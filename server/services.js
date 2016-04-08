var fetch = require('isomorphic-fetch');

module.exports.fetchAndSetState = function(config, state) {
  var endpoint = config.get('bbcServicesApi');

  getServices(endpoint)
    .then(
      function(services) {
        state.set(services.reduce(indexById, {}));
      },
      function(err) {
        console.error('Error fetching services list', err);
      }
  )
}

function indexById(obj, item) {
  obj[item.id] = item;
  return obj;
}

function getServices(endpoint) {
  return fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data.stations;
    });
}
