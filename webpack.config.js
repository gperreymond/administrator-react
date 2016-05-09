/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_js = path.resolve(__dirname, 'src/js');
var dir_html = path.resolve(__dirname, 'src/html');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
    entry: {
      bundle: [path.resolve(dir_js, 'application.js')]
    },
    output: {
      path: dir_build,
      filename: '[name].js' // production = filename: '[name]-[hash].js'
    },
    devServer: {
      contentBase: dir_build,
      outputPath: dir_build,
      port: 5050,
      hot: true,
      inline: true
    },
    module: {
      preLoaders: [
        { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'es6' } }
      ],
      loaders: [
        { test: /\.js|\.tag$/, exclude: /node_modules/, include: /src/, loader: 'babel-loader', query: {modules: 'common'} },
        { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' }
      ]
    },
    plugins: [
      // Use Environnements
      new webpack.EnvironmentPlugin([
        'NODE_ENV'
      ]),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      // Use Riotjs plugin
      new webpack.ProvidePlugin({
        riot: 'riot'
      }),
      // Simply copies the files over
      new CopyWebpackPlugin([
        { from: dir_html } // to: output.path
      ]),
      // Avoid publishing files when compilation fails
      new webpack.NoErrorsPlugin()
    ],
    stats: {
      // Nice colored output
      colors: true
    },
    // Create source maps for the bundle
    devtool: 'source-map',
};
