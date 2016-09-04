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

module.exports = {
  entry: [
    isDevelopment ? 'webpack-hot-middleware/client' : null,
    entryFile
  ],
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
        exclude: /(node_modules)/,
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
  plugins: [
    isDevelopment ? new webpack.HotModuleReplacementPlugin() : null,
  // // Simply copies the files over
  // new CopyWebpackPlugin([
  //     { from: dir_html } // to: output.path
  // ]),
  // // Avoid publishing files when compilation fails
  // new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  postcss: function() {
    return [autoprefixer];
  }
// Create source maps for the bundle
// devtool: 'source-map',
};
