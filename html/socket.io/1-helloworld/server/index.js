var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('一个用户加入链接');
  //监听当前客户端发来的自定义事件
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    //提交自定义事件到所有客户端
    io.emit('chat message', msg);
  });
  //监听当前客户端的断开
  socket.on('disconnect', () => {
    console.log('用户退出链接');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
