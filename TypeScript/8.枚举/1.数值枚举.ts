enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

//前面说过了,第一项默认值是0,后者依次+1
//并且每一项没有赋予值,那他就是前一项+1
//这里Up给了1,后面也是依次+1,那么Down就是2

//使用
console.log(Direction.Right); //4

//没有初始化的枚举成员要么是第一个(默认是0)
//要么在其他给了值得成员后面(+1)
//不能出现以下这种情况(B会报错)

// function getSomeValue(): number {
//   return 1;
// }
// enum E {
//   A = getSomeValue(),
//   B,
// }
