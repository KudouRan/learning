const https = require('https'),
  fs = require("fs");

const options = {
  key: fs.readFileSync('./myca.key'),
  cert: fs.readFileSync('./myca.crt')
};

https.createServer(options, (request, response) => {
  console.log('收到请求了,请求路径是:' + request.url);
  // response.write('hello');
  // response.write(' nodejs');
  // response.end();
  console.log('响应状态: ' + response.statusCode);
  response.end('hello world');
}).listen(3000)