const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
const webpack = require('webpack');
module.exports = webpackMerge(baseConfig, {
  resolve: {
    alias: {
      //配置vue使用
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 8080
  },
  plugins: [
    //插件,在bundle.js头部生成版权信息
    new webpack.BannerPlugin('最终版权归catlair所有')
  ]
})