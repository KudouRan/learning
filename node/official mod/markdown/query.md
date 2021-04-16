## querystring.escape(str)

用于stringify方法,通常不单独使用

**将文字转换成url编码**

```javascript
querystring.escape('中文')
// %E4%B8%AD%E6%96%87
```

## querystring.unescape(str)

用于parse方法,通常不单独使用

**将url编码转换成文字**

```javascript
querystring.unescape('%E4%B8%AD%E6%96%87')
//中文
```

## querystring.stringify(obj[, sep[, eq[, options]]])

**将对象转query**

参数分别是:
- obj
- sep 分割键值对,默认`&`
- eq 分割键和值,默认`=`
- options 配置项,见下面例子

```javascript
querystring.stringify({
  w: '中文',
  foo: 'bar'
}, null, null, {
  encodeURIComponent: 'gbkEncodeURIComponent'
})

// w=%E4%B8%AD%E6%96%87&foo=bar
```

## querystring.encode()

上面的别名

## querystring.parse(str[, sep[, eq[, options]]])

参数分别是:
- obj
- sep 分割键值对,默认`&`
- eq 分割键和值,默认`=`
- options 配置项,见下面例子

```javascript
querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null, {
  decodeURIComponent: 'gbkDecodeURIComponent'
})
// {w: '中文', foo: 'bar'}
```

## querystring.decode()

上面的别名
