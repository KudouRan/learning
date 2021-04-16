安装vue包(不在直接应用vue.js文件了),
在main中导入
```javascript
import Vue from 'vue';
```
直接使用会报错,因为默认导入的是`runtime-only`版本vue
需要配置
webpack(指定`runtime-compiler`版本)
```javascript
  resolve: {
    alias: {
      //配置vue使用
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
```

因为`runtime-only`不支持组件使用template属性
