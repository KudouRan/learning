const fs = require('fs');
const path = require('path');
const express = require('express');
const VueServerRenderer = require('vue-server-renderer');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const template = fs.readFileSync('./src/index.template.html', 'utf-8');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

//使用一个页面模板
const renderer = VueServerRenderer.createBundleRenderer(serverBundle, {
  template,
  clientManifest,
});

/**
 * 下面是服务端渲染的服务
 */

const server = express();

server.use(express.static(path.resolve(__dirname, 'dist')));

//处理所有url
server.get('*', (req, res) => {
  const context = { url: req.url };
  renderer
    .renderToString(context)
    .then((html) => {
      console.log('响应成功', req.url);
      res.send(html);
    })
    .catch((err) => {
      console.log(err);
      if (err.code === 404) {
        res.status(404).end('Page not found');
      } else {
        res.status(500).end('Internal Server Error');
      }
    });
});

server.listen(8181, () => {
  console.log('启动成功', 'http://localhost:8181');
});

/**
 * 下面是纯浏览器端的服务
 */

const client = express();

client.use(express.static(path.resolve(__dirname, 'dist')));

client.get('*', (_req, res) => {
  const html = fs.readFileSync('./dist/index.client.html', 'utf-8');
  res.send(html);
});

client.listen(8282, () => {
  console.log('非服务端渲染启动成功', 'http://localhost:8282');
});
