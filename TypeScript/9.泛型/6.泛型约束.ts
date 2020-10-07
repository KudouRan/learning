//之前的一个例子
// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length);
//   // Property 'length' does not exist on type 'T'.
//   return arg;
// }

//使用的解决方法是
// function loggingIdentity2<T>(arg: T[]): T[] {
//   console.log(arg.length);
//   return arg;
// }

//其实还可以创建一个描述约束的接口,让泛型继承他
interface Lengthwise {
  length: number;
}

function loggingIdentity4<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

//不过这样做让T不适合所有的类型
//例如
// loggingIdentity4(3)
//因为3是number,不具有Lengthwise中需要的length属性

//所有参数都得有length属性
loggingIdentity4({ length: 1, value: 3 });
