const http = require('http');

/*
let request = http.request({
    protocol: 'http:', // 请求的协议
    host: 'www.baidu.com', // 请求的host
    port: 80, // 端口
    method: 'GET', // GET请求
    timeout: 2000, // 超时时间
    path: '/' // 请求路径
  },
  res => { // 连接成功后，接收到后台服务器返回的响应，回调函数就会被调用一次。
    // res => http.IncomingMessage : 是一个Readable Stream
    res.on('data', data => {
      console.log(data.toString('utf8')); // 打印返回的数据。
    });
  }
);

// 设置请求头部
request.setHeader('Cache-Control', 'max-age=0');

// 真正的发送请求
request.end();
*/

http.get('http://www.baidu.com', res => {
  res.on('data', data => {
    console.log(data.toString('utf8'));
  });
});