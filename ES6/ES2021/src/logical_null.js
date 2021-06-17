let a = null;
let b = 0;

// 假设不知道a的值，但是如果a值为 null 或者 undefined，就给它赋值为2

// if (a === null || a === undefined) {
//   a = 2;
// }

// 简写 使用 es11 的 ??
// a ?? (a = 2);

// ES12 写法
a ??= 2;
b ??= 2;

// 这个不是以下的简写
// 以为即使a为null 或者 undefined， 也会执行 a = a
// a = a ?? 2;

console.log(a); // 输出2
console.log(b); // 输出0
