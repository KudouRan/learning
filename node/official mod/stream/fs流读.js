const fs = require("fs");

let data = '';

//创建可读流
const readerStream = fs.createReadStream('input.txt', {
  highWaterMark: 1 * 1024 //设置每次最大为1k
});

//设置编码为 utf8。
readerStream.setEncoding('UTF8');

//处理流事件 --> data, end, and error
readerStream.on('data', function (chunk) {
  // data += chunk;
  console.log('data');
  console.log(chunk);
  console.log('--------分割线-----------------------------------------------------------------------');
});

readerStream.on('end', function () {
  console.log('end');
  console.log(data);
});

readerStream.on('error', function (err) {
  console.log('error');
  console.log(err.stack);
});



console.log("程序执行完毕");