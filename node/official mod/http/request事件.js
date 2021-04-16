const http = require('http');

let server = new http.Server();
server.on('request', (req, res) => {
  console.log(req.url);
  //设置应答头信息
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('hello we are family<br>');
  res.end('server already end\n');
});
server.listen(8080);