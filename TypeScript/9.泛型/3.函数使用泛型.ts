function identity1<T>(arg: T): T {
  return arg;
}

//把identity1赋值给myIdentity2
let myIdentity2: <T>(arg: T) => T = identity1;

//当然名字可以不一样,这和上面是等价的
let myIdentity3: <U>(arg: U) => U = identity1;

//我们还可以写成对象字面量类型
let myIdentity4: { <T>(arg: T): T } = identity1;

//所以编写一个接口?,把上面的字面量复制下来

interface GenericIdentityFn {
  <T>(arg: T): T;
}

let myIdentity5: GenericIdentityFn  = identity1;
