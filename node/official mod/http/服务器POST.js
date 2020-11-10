const http = require('http');
const util = require('util');
const querystring = require('querystring');

http
  .createServer((req, res) => {
    let post = '';
    req.on('data', (chunk) => {
      post += chunk;
    });
    req.on('end', () => {
      post = querystring.parse(post);
      res.end(util.inspect(post));
    });
  })
  .listen(3000);
