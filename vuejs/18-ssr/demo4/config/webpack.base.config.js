const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  output: {
    //这个配置解决路由中访问资源文件的路径出错问题
    //默认路径是'client.bundle.js',增加设置后拼接一个'/'变成'/client.bundle.js'
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.vue'],
    //设置别名
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              //vue-loader使用的是commonjs,file-loader使用的是esm
              //导致img中插入的链接变成[object Object]
              //解决办法是将两者使用的模块方式保持一致
              esModule: false,
              name: '[name][hash:6].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
