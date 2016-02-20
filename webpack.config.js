'use strict';

const path = require('path');
const webpack = require('webpack');

const APP_ENTRY = path.join(__dirname, 'src', 'index.js');
const VENDOR = [
  'react',
  'redux',
  'redux-devtools',
  'react-redux',
];
const BUILD_PATH = path.join(__dirname, 'public', 'build');

const config = {
  entry: {
    app: [APP_ENTRY],
    vendor: VENDOR,
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIndentName=[name]__[local]__[hash:base64:5]',
          'postcss',
        ],
        exclude: /node_modules/,
      },
      // TODO add loaders for images, fonts, svg
    ],
  },
  postcss: function() {
    return [require('postcss-modules-values')];
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV === 'development',
      __NO_DEV_TOOLS__: process.env.DEVTOOLS === 'false',
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
};

let finalConfig;
if (process.env.NODE_ENV === 'development') {
  finalConfig = Object.assign({}, config, {
    devtool: '#eval-source-maps',
    entry: {
      app: ['webpack-hot-middleware/client'].concat(config.entry.app),
      vendor: config.entry.vendor,
    },
    module: {
      preLoaders: [
        { test: /\.js$/, loaders: ['eslint'], exclude: /node_modules/ },
      ],
      loaders: config.module.loaders,
    },
    eslint: {
      configFile: './.eslintrc.js',
    },
    plugins: config.plugins.concat([new webpack.HotModuleReplacementPlugin()]),
  });
} else {
  finalConfig = config;
}

module.exports = finalConfig;
