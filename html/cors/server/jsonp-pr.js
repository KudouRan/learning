const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  let data = 'hello world';
  let callback = url.parse(req.url, true).query.callback;
  // 将callback(data)以字符串的形式返还数据，前端页面会将callback(data)作为js执行
  res.write(`${callback}(${JSON.stringify(data)})`);
  res.end();
});

server.listen(3001, () => {
  console.log('服务器启动成功');
});
