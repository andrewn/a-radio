/* global __dirname */

var resolve = require('path').resolve;
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
// var CopyWebpackPlugin = require('copy-webpack-plugin');

var isDevelopment = process.env.NODE_ENV === 'development' ? true : false;

var entryFile = resolve(__dirname, 'client', 'index.js');
var buildDir = resolve(__dirname, 'dist');
// var dir_js = resolve(__dirname, 'js');
// var dir_html = resolve(__dirname, 'html');
// var dir_build = ;


module.exports = createWebpackConfig();

function createWebpackConfig(options) {
  const entries = [
    entryFile
  ];

  const plugins = [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer]
      }
    })
  ];

  if (isDevelopment) {
    entries.push('webpack-hot-middleware/client');
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    entry: entries,
    output: {
      path: buildDir,
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: buildDir,
    },
    module: {
      loaders: [
        {
          loader: 'babel',
          test: /\.jsx?$/,
          exclude: [ resolve('node_modules/proptypes') ]
        },
        {
          loader: 'style!css!postcss',
          test: /\.css$/
        },
        {
          loader: 'raw',
          test: /\.svg$/
        }
      ]
    },
    resolve: {
      alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
      }
    },
    plugins: plugins,
    // // Simply copies the files over
    // new CopyWebpackPlugin([
    //     { from: dir_html } // to: output.path
    // ]),
    // // Avoid publishing files when compilation fails
    // new webpack.NoErrorsPlugin()
    stats: {
      // Nice colored output
      colors: true
    }
  // Create source maps for the bundle
  // devtool: 'source-map',
  };
}
