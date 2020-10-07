//枚举是真实存在的

enum E {
  X,
  Y,
  Z,
}

function f(obj: { Y: number }) {
  return obj.Y;
}

console.log(f(E));

//并不会在运行时就找不E了
//下面是真实的js代码
// "use strict";
// var E;
// (function (E) {
//     E[E["X"] = 0] = "X";
//     E[E["Y"] = 1] = "Y";
//     E[E["Z"] = 2] = "Z";
// })(E || (E = {}));
// function f(obj) {
//     return obj.Y;
// }
// console.log(f(E));
