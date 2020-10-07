//关于递增和默认值就不说了

// constant enum expression
//1. 字符串或者数字字面量
//2. 先前成员的引用(包括其他枚举的成员)
//3. 括号
//4. +,-,~一元表达式
//5. +，-，*，/，%，<<，>>，>>>，&，|，^二元表达式
//NaN or Infinity会导致编译时错误

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = '123'.length,
}
