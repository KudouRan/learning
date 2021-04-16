const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { GLOBAL_MESSAGE, USER_CHANGE } = require('./libs/var');

let counter = 0;

io.on('connection', (socket) => {
  counter++;

  console.log('一个用户加入链接', `用户数:${counter}`);

  io.emit(USER_CHANGE, { msg: 'add', counter });

  socket.on(GLOBAL_MESSAGE, (msg) => {
    console.log('message: ', msg);
    io.emit(GLOBAL_MESSAGE, msg);
  });

  socket.on('disconnect', () => {
    counter--;
    console.log('用户退出链接', `用户数:${counter}`);
    io.emit(USER_CHANGE, { msg: 'sub', counter });
  });
});

server.listen(3000, () => {
  console.log('服务启动在3000端口');
});
