var Twitter = require('twitter');
var OAuth = require('oauth');
var profile = require('../../lib/local-data').profile;

function createOAuth(callback) {
  return new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.TWITTER_CONSUMER_KEY,
    process.env.TWITTER_CONSUMER_SECRET,
    '1.0A',
    callback,
    'HMAC-SHA1'
  );
}

// oauth_verifier=wEhaeETuieMtQPDBRIS3tAjLT7d8h1PO
// oauth_token=-hWZogAAAAAAxEALAAABV0lPBAo

module.exports = {
  connect: function (state, player, url) {
    console.log('CONNECT');
    createOAuth(url).getOAuthRequestToken(function (error, oAuthToken, oAuthTokenSecret, results) {
      console.log('error', error);
      console.log('oAuthRequestToken', oAuthToken);
      console.log('oAuthTokenSecret', oAuthTokenSecret);
      console.log('results', results);

      const credentials = {
        authUrl: 'https://api.twitter.com/oauth/authorize?oauth_token=' + oAuthToken,
        oAuthTokenSecret: oAuthTokenSecret,
        oAuthToken: oAuthToken
      };

      state.merge(credentials);

      // profile.set({
      //   twitter: credentials
      // });
    });
  },
  verify: function (state, player, oAuthVerifier) {
    console.log("VERIFY", oAuthVerifier);
    createOAuth().getOAuthAccessToken(
      state.get('oAuthToken'),
      state.get('oAuthTokenSecret'),
      oAuthVerifier,
      function (error, oAuthAccessToken, oAuthAccessTokenSecret, results) {
        console.log('Done', error, oAuthAccessToken, oAuthAccessTokenSecret, results);

        if (error) {
          console.error('  ', error);
          return;
        }

        const credentials = {
          oAuthAccessToken: oAuthAccessToken,
          oAuthAccessTokenSecret: oAuthAccessTokenSecret,
          screenName: results.screen_name
        };

        state.merge(credentials);
      }
    );
  },
  trigger: function (state) {
    console.log('TRIGGER');

    const authCredentials = {
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: state.get('oAuthAccessToken'),
      access_token_secret: state.get('oAuthAccessTokenSecret')
    };

    console.log('AUTH', authCredentials);

    var client = new Twitter(authCredentials);

    client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
      if(error) throw error;
      console.log(tweet);  // Tweet body.
      console.log(response);  // Raw response object.
    });
  }
}
