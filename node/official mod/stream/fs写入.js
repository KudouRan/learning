const fs = require('fs');
const data = '教室里的灯亮着 你还没走 还记得我写给你的情书';

// 创建一个可以写入的流，写入到文件 output.txt 中
const writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data, 'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function () {
  console.log('写入完成。');
});

writerStream.on('error', function (err) {
  console.log(err.stack);
});

console.log('程序执行完毕');
