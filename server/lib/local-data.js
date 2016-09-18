const LocalStorage = require('node-localstorage').LocalStorage;
const path = require('path');

const directory = process.env.LOCAL_DATA_PATH || path.join(__dirname, '..', '..', 'user-data');
const cachePath = path.join(directory, 'cache');
const profilePath = path.join(directory, 'profile')

console.log('Storage: cachePath', cachePath);
console.log('Storage: profilePath', profilePath);

const cache   = new LocalStorage( cachePath );
const profile = new LocalStorage( profilePath );

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
      const data = storage.getItem(key);
      return (data === '' || data === null) ? null : JSON.parse( data );
    } catch (err) {
      console.error('error getting key ', key)
      throw err;
    }
  }
}

function createStorageForObject(storage) {
  return {
    get: createGetterForStorageObject(storage),
    set: createSetterForStorageObject(storage)
  };
}
