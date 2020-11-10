const { merge } = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  output: {
    //这个配置解决路由中访问资源文件的路径出错问题
    //默认路径是'client.bundle.js',增加设置后拼接一个'/'变成'/client.bundle.js'
    publicPath: '/',
  },
  entry: {
    client: path.resolve(__dirname, '../src/entry-client.js'),
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.client.html',
      minify: {
        removeComments: false,
      },
    }),
  ],
});
