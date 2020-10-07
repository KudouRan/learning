## 默认event参数

在监听原生 DOM 事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个 `$event` 属性：`v-on:click="handle('ok', $event)"`。

```html
     <button @click="fun">按钮一</button>
```

```javascript
methods: {
    fun(event) {
        console.log(event);
    }
}
```

**上面会打印事件对象**

