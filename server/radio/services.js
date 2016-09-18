'use strict';

var fetch = require('isomorphic-fetch');
var cache = require('../lib/local-data').cache;

const CACHE_KEY = 'bbc-services';
const TIMEOUT_MS = 5 * 1000;

module.exports.fetchAndSetState = function(config, state) {
  var endpoint = config.get('bbcServicesApi');

  var cachedServices = cache.get(CACHE_KEY);

  return new Promise(function (resolve, reject) {
    var promiseResolver = resolve;

    if (cachedServices !== null) {
      console.log('Found cached services', Object.keys(cachedServices));
      state.set(cachedServices);
      promiseResolver(cachedServices);
      promiseResolver = null; // Subsequent caches shouldn't resolve this promise
    }

    fetchAndParseServices(endpoint, state, promiseResolver);
  });
}

function fetchAndParseServices(endpoint, state) {
  console.log('Fetch services from ', endpoint);
  return getServices(endpoint)
    .then(
      // Success
      function(services) {
        console.log('... done, found services', services.length);
        const servicesById  = services.reduce(indexById, {});
        state.set(servicesById);
        cache.set(CACHE_KEY, servicesById);
        if (promiseResolver !== null) {
          promiseResolver(servicesById);
        }
      },
      // Failure
      function(err) {
        console.error('Error fetching services list', err);
        console.error('Try again in ', TIMEOUT_MS, 'ms');

        setTimeout(
          function () { fetchAndParseServices(endpoint) },
          TIMEOUT_MS
        );
      }
    );
}

function indexById(obj, item) {
  obj[item.id] = item;
  return obj;
}

function getServices(endpoint) {
  return fetch(`${endpoint}/services.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data.services;
    });
}
