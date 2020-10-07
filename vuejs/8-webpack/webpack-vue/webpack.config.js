const path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
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
  }
}