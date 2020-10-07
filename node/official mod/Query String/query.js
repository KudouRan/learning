const querystring = require('querystring');

//默认将对象变query
let query1_d = querystring.stringify({
  foo: 'bar',
  baz: ['qux', 'quux'],
  corge: 'hehe'
});

console.log(query1_d); //foo=bar&baz=qux&baz=quux&corge=hehe

//自定义将对象变query
let query1 = querystring.stringify({
  foo: 'bar',
  baz: ['qux', 'quux'],
  corge: 'hehe'
}, '#', '%'); //后面两个参数是分割字符串

console.log(query1); //foo%bar#baz%qux#baz%quux#corge%hehe

//将默认query转换成对象
let query2_d = querystring.parse(query1_d);

console.log(query2_d);

//将自定义query转换成对象
query2 = querystring.parse(query1, '#', '%'); //后面两个参数同上

console.log(query2);

//这是将文字转码的方式
console.log(querystring.stringify({
  w: '中文',
  foo: 'bar'
}, null, null, {
  encodeURIComponent: 'gbkEncodeURIComponent'
}));

console.log(querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null, {
  decodeURIComponent: 'gbkDecodeURIComponent'
}));

//编码
let chinese = querystring.escape('中文');

console.log(chinese);

//解码
chinese = querystring.unescape(chinese);

console.log(chinese);