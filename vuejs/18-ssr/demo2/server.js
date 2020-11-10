const express = require('express');
const fs = require('fs');
const VueServerRenderer = require('vue-server-renderer');
const serverBundle = fs.readFileSync('./dist/server.bundle.js', 'utf-8');
const template = fs.readFileSync('./dist/index.template.html', 'utf-8');

//使用一个页面模板
const renderer = VueServerRenderer.createBundleRenderer(serverBundle, {
  template,
});

const server = express();

server.use(express.static('dist'));

server.get('*', async (_req, res) => {
  const html = await renderer.renderToString();
  res.send(html);
  // renderer.renderToString((err, html) => {
  //   if (err) {
  //     console.log(err);
  //     res.status = '500';
  //     res.send('error');
  //   } else {
  //     res.send(html);
  //   }
  // });
});

server.listen(8080, () => {
  console.log('启动成功');
});
