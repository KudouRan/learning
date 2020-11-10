const url = require('url');

const testURL = 'http://user:pass@测试.xn--yfr.com:80/p?query=string#hash';

const myURL = new URL(testURL);

const testURL1 = url.format(myURL, {
  auth: false,
  fragment: true,
  search: false,
  unicode: true,
});

console.log(testURL1);
