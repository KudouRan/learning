const path = require('path');

//获取文件名称(path.basename(path[, ext]))
console.log(path.basename('C:\\temp\\myfile.html', '.html'));

//路径界定符,windows是;  POSIX是:
console.log(path.delimiter);
//用法区分windows和其他平台,例如:
//console.log(process.env.PATH);
//console.log(process.env.PATH.split(path.delimiter));

//返回目录名称
console.log(path.dirname('/foo/bar/baz/asdf/quux.txt'));

//返回扩展名
console.log(path.extname('/foo/bar/baz/asdf/quux.md'));

//将对象返回路径
console.log(
  path.format({
    root: '/',
    name: 'file',
    ext: '.txt',
  })
);

//确定是否是绝对路径
console.log(path.isAbsolute('/foo/bar'));

//对路径进行连接,根据系统判别
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

//将路径统一化,区分平台
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));

//对路径进行解析,返回对象
console.log(path.parse('/home/user/dir/file.txt'));

//系统路径分割符path.sep
console.log(path.win32.sep);
console.log(path.posix.sep);

//返回相对路径
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));

//返回绝对路径path.resolve([...paths])
console.log(path.resolve());
console.log(path.resolve(__dirname, __filename));

//仅在windows有效,给路径增加前缀
console.log(path.toNamespacedPath('/data/orandea/test/aaa'));
