const Vue = require('vue');
const server = require('express')();
//使用一个页面模板
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./src/index.dev.html', 'utf-8'),
});

//定义上下文变量
const context = {
  title: 'vue ssr demo',
  meta: `
      <meta name="keyword" content="vue,ssr">
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="description" content="vue srr demo">
  `,
};

server.get('*', (req, res) => {
  //vue实例
  const app = new Vue({
    data: {
      url: req.url,
      color: 'color:blue;',
    },
    template: `<div :style="color">访问的 URL 是： {{ url }}</div>`,
  });

  //渲染数据和页面
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error');
      return;
    }
    res.end(html);
  });
});

server.listen(8080, () => {
  console.log('启动成功');
});
