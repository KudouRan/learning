runtime-only和runtime-compiler区别

**后者:**
```javascript
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App
  }
})
```

**前者:**
```javascript
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el:'#app',
  render(createElement) {
   return createElement(App) 
    //一,createElement('创建的标签','标签的属性(对象)','标签的内容(数组)')
    //例如createElement('h2',{class:'box'},['hello','world'])
    //二,传入组件(例如这里)
  }
})
```

前者其实`vue-template-compiler`已经进行处理模板了,所以不需要template了