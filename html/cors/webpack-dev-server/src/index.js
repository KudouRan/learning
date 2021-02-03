const makeXHR = require('../../libs/xhr');

//需要运行的后端是jsonp-pr.js

document.querySelector('button').addEventListener('click', () => {
  makeXHR({
    baseurl: 'http://127.0.0.1:9000',
    path: '/api',
  });
});
