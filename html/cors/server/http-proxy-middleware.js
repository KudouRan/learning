const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const options = {
  target: 'http://127.0.0.1:3001',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
};

const exampleProxy = createProxyMiddleware(options);

const app = express();
app.use('/api', exampleProxy);

app.use(express.static(path.resolve(__dirname, '../http-proxy-middleware')));
//lib是xhr请求的地址
app.use('/libs', express.static(path.resolve(__dirname, '../libs')));

app.listen(9000);
