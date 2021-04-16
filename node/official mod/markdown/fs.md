## 前言

`fs.readdir(path[, options], callback)`异步操作  
`fs.readdirSync(path[, options])`同步操作  
`fsPromises.readdir(path[, options])`Promise操作  

```javascript
const fs = require('fs');
const fsPromise = fs.promises;

fsPromise.readdir('./')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
```

## fs.stat  检测是文件还是目录(目录 文件是否存在) 

```javascript
fs.stat(path[, options], callback)
```

```javascript
fs.stat('./fs.js', (err, value) => {
  console.log(err);
  console.log(value.isDirectory()); //布尔
})
```

## fs.mkdir  创建目录 （创建之前先判断是否存在） 

```javascript
fs.mkdir(path[, options], callback)
```

## fs.writeFile  写入文件(文件不存在就创建,但不能创建目录) 

```javascript
fs.writeFile(file, data[, options], callback)
```

## fs.appendFile 写入追加文件 

```javascript
fs.appendFile(path, data[, options], callback)
```

## fs.readFile 读取文件 

```javascript
fs.readFile(path[, options], callback)
```

## fs.readdir 读取目录 

```javascript
fs.readdir(path[, options], callback)
```

## fs.rename 重命名 

```javascript
fs.rename('demo', 'temp', (err) => {})
```

## fs.rmdir  删除目录(支持递归)

```javascript
fs.rmdir(path[, options], callback)
```

例子:递归删除
```javascript
fs.rmdir('./temp', {
  recursive: true
}, (err) => {
  console.log(err);
})
```

## fs.unlink 删除文件 

```javascript
fs.unlink('demo.txt', (err) => {})
```
## 流

### s.createReadStream(path[, options])

### fs.createWriteStream(path[, options])

流的参见stream篇