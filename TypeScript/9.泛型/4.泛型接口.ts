//还是刚才的例子
function identity2<T>(arg: T): T {
  return arg;
}

/*
interface GenericIdentityFn {
  <T>(arg: T): T;
}
*/

//我们将通用的参数移动为整个接口的参数
//使得接口所有成员可以使用这个<number>
interface GenericIdentityFn1<T> {
  (arg: T): T;
}

let myIdentity6: GenericIdentityFn1<number> = identity2;
