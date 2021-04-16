## URL Object

```javascript
const testURL = 'http://user:pass@sub.host.com:8080/p/a/t/h?query=string&&us=hehe&&pw=123#hash';

const myURL = new URL(testURL);

console.log(myURL)
```



![image-20200208171430820](url/image-20200208171430820.png)



## url.parse 解析url

```javascript
const testURL = 'http://user:pass@sub.host.com:8080/p/a/t/h?query=string&&us=hehe&&pw=123#hash';

const objURL = url.parse(testURL, true); //true表示解析query

console.log(objURL)
```

![image-20200208171941515](url/image-20200208171941515.png)



## url.format(urlObject) 转换url

```javascript
const testURL = 'http://user:pass@sub.host.com:8080/p/a/t/h?query=string&&us=hehe&&pw=123#hash';

const objURL = url.parse(testURL, true);

const testURL1 = url.format(objURL)

console.log(testURL1 === testURL); //true
```



## url.format(URL[, options]) 转换url



```javascript
const url = require('url');

const testURL = 'http://user:pass@测试.xn--yfr.com:80/p?query=string#hash';

const myURL = new URL(testURL);

// 以下全部采用非默认参数
const testURL1 = url.format(myURL, {
  auth: false,		//不显示账号密码
  fragment: false,	//不显示字段(hash)
  search: false,	//不显示search
  unicode: true		//将ASCII转换成unicode
})
//	http://测试.加.com/p
```





## url.resolve(from,to)

```javascript
url.resolve('/one/two/three', 'four');
// '/one/two/four'
url.resolve('http://example.com/', '/one'); 
// 'http://example.com/one'
url.resolve('http://example.com/one', '/two'); 
// 'http://example.com/two'
```

## url.domainToASCII() 

```javascript
url.domainToASCII('你好.我爱你');
//xn--6qq79v.xn--6qq986b3xl
```

## url.domainToUnicode()

```JavaScript
url.domainToUnicode('xn--6qq79v.xn--6qq986b3xl');
// 你好.我爱你
```

## url.fileURLToPath()

```JavaScript
url.fileURLToPath('file:///D:/Users/Desktop/test1.html')
// D:\Users\Desktop\test1.html
```

