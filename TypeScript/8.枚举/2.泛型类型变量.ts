//还是刚才的例子
//因为arg可以是任意类型,这里我们假设他是数组,并且在函数中打印数组长度

function loggingIdentity1<T>(arg: T): T {
  // 会出现一个错误T不存在length
  // console.log(arg.length);
  return arg;
}

//上面例子出现错误的原因是
//T可以是任何类型,在写函数时也不知道你会传入什么类型
//万一他是number呢,怎么会有length类型

//换成下面的例子就代表传入的是任意类型的数组
//他的用处就是,当传入参数后,能知道是number,string或者其他
// 而不是只知道是数组

function loggingIdentity2<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

//啊这
function loggingIdentity3<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}
