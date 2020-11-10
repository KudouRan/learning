const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();

const app = new Vue({
  data: {
    msg: 'hello,world',
  },
  template: `<div>{{ msg }}</div>`,
});

renderer.renderToString(app, (err, html) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(html);
});
