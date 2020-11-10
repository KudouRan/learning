process.env.VUE_APP_VERSION = require('./package.json').version;

if (process.env.WEBPACK_TARGET !== 'serve') {
  const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
  const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
  const merge = require('lodash.merge');

  const TARGET_NODE = process.env.WEBPACK_TARGET === 'web';
  const entry = TARGET_NODE ? 'client' : 'server';
  const isPro = process.env.NODE_ENV !== 'development';

  module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    pages: {
      index: {
        entry: `./src/entry-${entry}.js`,
        template: './public/index.html',
      },
    },
    css: {
      extract: isPro ? true : false,
    },
    chainWebpack: (config) => {
      // 关闭vue-loader中默认的服务器端渲染函数
      config.module
        .rule('vue')
        .use('vue-loader')
        .tap((options) => {
          merge(options, {
            optimizeSSR: false,
          });
        });
      // 修改下打包应用的名字
      if (TARGET_NODE) {
        config.plugin('html-index').tap((options) => {
          options[0].filename = 'index.client.html';
          return options;
        });
      }
    },
    configureWebpack: {
      // 需要开启source-map文件映射，因为服务器端在渲染时，
      // 会通过Bundle中的map文件映射关系进行文件的查询
      devtool: 'source-map',
      // 服务器端在Node环境中运行，需要打包为类Node.js环境可用包（使用Node.js require加载chunk）
      // 客户端在浏览器中运行，需要打包为类浏览器环境里可用包
      target: TARGET_NODE ? 'web' : 'node',
      // 关闭对node变量、模块的polyfill
      node: TARGET_NODE ? false : undefined,
      output: {
        // 配置模块的暴露方式，服务器端采用module.exports的方式，客户端采用默认的var变量方式
        libraryTarget: TARGET_NODE ? undefined : 'commonjs2',
      },
      // 避免服务端报错
      optimization: {
        splitChunks: TARGET_NODE ? undefined : false,
      },
      plugins: [
        // 根据之前配置的环境变量判断打包为客户端/服务器端Bundle
        TARGET_NODE ? new VueSSRClientPlugin() : new VueSSRServerPlugin(),
      ],
    },
  };
}
