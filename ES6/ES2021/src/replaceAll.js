let a = '123...';

// 第一个参数是字符串
let b = a.replaceAll('.', 'b');

// 第一个参数是正则表达式
// TypeError: String.prototype.replaceAll called with a non-global RegExp argument
// let c = a.replaceAll(/\w/, 'c');
let c = a.replaceAll(/\w/g, 'c');

console.log(a);
console.log(b);
console.log(c);
