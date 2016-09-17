const LocalStorage = require('node-localstorage').LocalStorage;
const path = require('path');

const directory = process.env.LOCAL_DATA_PATH || '../';
const cache   = new LocalStorage('cache');
const profile = new LocalStorage('profile');

module.exports = {
  cache: createStorageForObject(cache),
  profile: createStorageForObject(profile)
};

function createSetterForStorageObject(storage) {
  return function (key, data) {
    try {
      const str = JSON.stringify(data);
      storage.setItem(key, str);
    } catch (err) {
      throw new Error('error setting key ', key, ' with data', data);
    }
  }
}

function createGetterForStorageObject(storage) {
  return function (key) {
    try {
      return JSON.stringify( storage.getItem(key) );
    } catch (err) {
      throw new Error('error setting key ', key);
    }
  }
}

function createStorageForObject(storage) {
  return {
    get: createGetterForStorageObject(storage),
    set: createSetterForStorageObject(storage)
  };
}
