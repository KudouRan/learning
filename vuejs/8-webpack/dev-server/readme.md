安装webpack-dev-server,开发时依赖
在webpack中配置
```javascript
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 8080
  }
```
配置脚本

```json
    "dev": "webpack-dev-server"
```