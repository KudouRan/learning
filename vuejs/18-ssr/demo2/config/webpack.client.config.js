const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const path = require('path');

module.exports = merge(baseConfig, {
  entry: {
    client: path.resolve(__dirname, '../src/entry-client.js'),
  },
});
