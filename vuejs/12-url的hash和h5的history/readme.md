1. location.hash

```javascript
location.hash = '/about'
```

2. history.pushState()

```javascript
history.pushState({},'','/aaa')
```

类似于入栈

3. history.back()

类似于出栈 ,相当于history.go(-1)

4. History.replaceState()

替换当前

5. History.forward()

前往下一页,相当于History.go(1)

6. History.go()

通过当前页面的相对位置从浏览器历史记录( 会话记录 )加载页面