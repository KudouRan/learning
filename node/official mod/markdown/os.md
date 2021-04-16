```javascript
const os = require('os');

//cpu核心信息
console.log(os.cpus());

//换行符
console.log(os.EOL);

//系统架构, 如x64
console.log(os.arch());

//各种代码
console.log(os.constants);

//cpu字序
console.log(os.endianness());

//可用内存量
console.log(os.freemem());

//返回home地址
console.log(os.homedir());

//返回主机名
console.log(os.hostname());

//1, 5, and 15分钟的平均负载,UNIX才有,windows返回[0,0,0]
console.log(os.loadavg());

//获取网络ip信息
console.log(os.networkInterfaces());

//返回系统标识,比如win32,linux
console.log(os.platform());

//系统版本信息,如10.0.18363
console.log(os.release());

//temp路径,如C:\Users\cat\AppData\Local\Temp
console.log(os.tmpdir());

// 设置pid
// os.setPriority([pid, ] priority)
// 查看系统当前 console.log(os.constants.priority);

//内存总量
console.log(os.totalmem());

//返回操作系统名称,如,Windows_NT
console.log(os.type());

//系统运行时间(s)
console.log(os.uptime());

//用户信息
console.log(os.userInfo());
```