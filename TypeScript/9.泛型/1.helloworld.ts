//假设有个识别身份的函数
function identity1(arg: number): number {
  return arg;
}

//我们也可以使用any
function identity2(arg: any): any {
  return arg;
}

//但用any并没有意义,因为我们传入一个数字
//能知道的是他会返回一个任意类型的的值,而不一定是数字

//有了泛型以后,就能将传入参数的类型当做返回的参数类型
//假设你传入一个字符串,就能知道返回的也是一个字符串
//这个T是随便取的,只是习惯T(type)
function identity3<T>(arg: T): T {
  return arg;
}

//在使用时就应该告诉你传入的类型

console.log(identity3<string>('string'));

//当然,ts有类型推断

console.log(identity3('string'));

//不过在复杂的情况下尽量使用<>
//这样也好给编辑器一个提示
