安装 webpack

```bash
  npm i -D webpack webpack-cli
```

处理 html

```bash
  npm i -D html-webpack-plugin
```

处理 css

```bash
  npm i -D style-loader css-loader
```

处理 less （需要 css 的加 less 的）

```bash
  npm i -D less less-loader
```

增加浏览器前缀

```bash
  npm i -D postcss-loader autoprefixer
```

css 全部在 js 中，js 会变臃肿，所以需要拆分 css

```bash
  npm i -D mini-css-extract-plugin
```

文件处理

```bash
  npm install -D url-loader file-loader
```

babel 使用

```bash
npm i -D babel-loader @babel/preset-env @babel/core
```

使用 TypeScript （在 babel 基础上）

```bash
npm i -D @babel/preset-typescript
```

使用 polyfill

```bash
npm i @babel/polyfill
```

处理 Vue

```bash
npm i -D vue-loader vue-template-compiler vue-style-loader
npm i -S vue
```

热更新

```bash
npm install -D webpack-dev-server
```

webpack5 用下面命令启动 server

```bash
webpack server
```

分解配置

```bash
npm i -D webpack-merge
```

一个私有 npm 代理

```bash
npm install verdaccio -g
```
