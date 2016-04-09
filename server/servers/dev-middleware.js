var webpackDevMiddleware,
  webpackHotMiddleware,
  webpack,
  config;

module.exports = function(app) {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  try {
    webpackDevMiddleware = require('webpack-dev-middleware');
    webpackHotMiddleware = require('webpack-hot-middleware');
    webpack = require('webpack');
    config = require('../../webpack.config.js');
  } catch (e) {}

  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true
  }));
  app.use(webpackHotMiddleware(compiler));
}
