//函数和js一样具有具名和匿名两种方式,并且和js的作用域也是一样的

//如下写法是没问题,但是至少少了参数类型和返回值类型

let z = 100;

function addToZ(x, y) {
  return x + y + z;
}
