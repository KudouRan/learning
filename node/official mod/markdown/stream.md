## Stream(流) 介绍

这是一个抽象接口,很多node对象实现了这个接口,例如,对http服务器发起请求的request对象就是一个Stream,还有标准输出和文件读取等等.

### 四种流类型

- Readable 可读操作
- Writable 可写操作
- Duplex 可读写操作
- Transform 操作被写入数据,然后读取结果

### EventEmitter 实例

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

- data 有数据可读时
- end 没有更多数据时
- error 接收或者写入发生错误时
- finish 所有数据已经被写入底层系统时

## 从流中读取数据

下面是个文件读取的例子,设置每次读1kb

```JavaScript
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
```

## 写入流

```JavaScript
const fs = require("fs");
const data = '教室里的灯亮着 你还没走 还记得我写给你的情书';

// 创建一个可以写入的流，写入到文件 output.txt 中
const writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");
```

## 管道流

```javascript
const fs = require("fs");

// 创建一个可读流
const readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
const writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");
```

## 链式流

#### 压缩

```JavaScript
const fs = require("fs");
const zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");
```

#### 解压

```JavaScript
const fs = require("fs");
const zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成。");
```

