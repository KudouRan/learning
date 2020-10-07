//箭头表示函数的返回类型\
//将他比作箭头函数即可

let myAdd1: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

//上面参数类型前面的名称只用于理解
//为了让其更有意义,可以这样写
//将x,y替换成有实际意义的单词

let myAdd2: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

// 这样写多了太多代码了
//实际上函数题不用写这么多
//前面指定了类型后面就不用再写了

let myAdd3: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};

//当然你也可以进行类型推倒,不用写前面的
//下面的例子ts能很轻松的分清楚参数和返回类型
//不用再给myAdd4单独加上类型了

let myAdd4 = function (x: number, y: number): number {
  return x + y;
};
