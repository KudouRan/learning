function identity1<T>(arg: T): T {
  return arg;
}

let myIdentity2: <T>(arg: T) => T = identity1;

//当然名字可以不一样,这和上面是等价的
let myIdentity3: <U>(arg: U) => U = identity1;
