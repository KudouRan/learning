const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './webpack-dev-server/src/index.js',
  mode: 'development',
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'build'),
  // },
  devServer: {
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        pathRewrite: { '^/api': '' },
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
  ],
};
