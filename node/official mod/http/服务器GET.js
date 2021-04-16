const http = require('http');
// const url = require('url');
// const util = require('util');

http
  .createServer((req, res) => {
    //利用url模块去解析客户端发送过来的URL
    console.log(req.url);
    // res.write(util.inspect(url.parse(req.url, true)));
    res.end();
  })
  .listen(8080);
