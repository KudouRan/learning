const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development', // 开发模式
  entry: path.resolve(__dirname, './src/main.js'), // 入口文件
  output: {
    filename: '[name].[fullhash:8].js', // 打包后的文件名称
    path: path.resolve(__dirname, './dist'), // 打包后的目录
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          'hello-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.txt$/i,
        use: ['a-loader', 'b-loader', 'c-loader'],
      },
    ],
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, '../node_modules'), path.resolve(__dirname, 'loaders')],
  },
  plugins: [
    // 用来处理 html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    // 用于清理之前打包的文件
    new CleanWebpackPlugin(),
  ],
}
