const http = require('http');
const WebSocketServer = require('websocket').server;

const server = http.createServer();

const wsServer = new WebSocketServer({
  httpServer: server,
});

//用于存储所有的链接
const user = [];

wsServer.on('request', (request) => {
  //没有协议填null
  const connection = request.accept(null, request.origin);

  console.log(new Date() + ' 已连接...');

  //保存链接
  user.push(connection);

  setTimeout(() => {
    connection.sendUTF(new Date() + 'hello client !!!');
  }, 2000);

  connection.on('message', (message) => {
    //判断传来的数据类型
    if (message.type === 'utf8') {
      console.log('收到消息: ' + message.utf8Data);
      //发送给所有客户端
      // connection.sendUTF(message.utf8Data);
      user.forEach((con) => {
        // if (con === connection) return; //消息不返回给自己
        con.sendUTF(message.utf8Data);
      });
    } else if (message.type === 'binary') {
      console.log('收到二进制消息 ' + message.binaryData.length + ' bytes');
      //发送给所有客户端
      user.forEach((con) => {
        con.sendBytes(message.binaryData);
      });
    }
  });

  connection.on('close', (_reasonCode, _description) => {
    console.log(
      new Date() + ' 同行的 ' + connection.remoteAddress + ' 断开连接.'
    );
  });
});

server.listen(3000, () => {
  console.log(new Date() + ' 服务器运行在 3000 端口');
});
