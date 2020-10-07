3.6.0打包方法

```bash
  webpack ./src/main.js ./dist/hundle.js
```

```bash
  npm init  //初始化
```

创建`webpack.config.js`

```javascript
const path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
```

安装局部webpack出现下面错误时,是你把文件夹也创建成了webpack(测试时乱取名字的锅),node把当前项目配置成了webpack,改一下就好(比如改成webpack-learn)

![image-20200122195148559](readme/image-20200122195148559.png)

![image-20200122195225124](readme/image-20200122195225124.png)

让webpack注意到css文件

![image-20200122195507720](readme/image-20200122195507720.png)



![image-20200122200145272](readme/image-20200122200145272.png)

处理图片时注意

![image-20200122204122204](readme/image-20200122204122204.png)

但是用file-loader又有问题

![image-20200122203935762](readme/image-20200122203935762.png)

![image-20200122204339918](readme/image-20200122204339918.png)

解决办法`webpack.config.js`中增加一个变量(当然是不是要这样做是和index.html位置有关系)

![image-20200122204415626](readme/image-20200122204415626.png)

如果觉得图片放的位置比较乱可以处理一下

![image-20200122205352719](readme/image-20200122205352719.png)

