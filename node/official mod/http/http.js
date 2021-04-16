const http = require('http');

const server = http.createServer((request, response) => {
  console.log('收到请求了,请求路径是:' + request.url);
  // response.write('hello');
  // response.write(' nodejs');
  // response.end();
  console.log('响应状态: ' + response.statusCode);
  response.end('hello world');
});

server.listen(3000, () => {
  if (server.listening === true) {
    console.log('服务启动成功');
  }
})