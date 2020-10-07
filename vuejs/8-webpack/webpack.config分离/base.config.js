const path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|bmp)$/,
        use: [{
          loader: 'url-loader',
          //当图片小于limit时,会把图片转换成base64字符串形式
          //当图片大于limit时,需要使用file-loader进行加载
          options: {
            limit: 100000,
            name: 'img/[name].[hash:8].[ext]'
          },
        }]
      },
      {
        test: /\.js$/,
        //排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
  },
}