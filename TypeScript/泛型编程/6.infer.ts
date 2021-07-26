// 条件类型在某些时候并不够用
// 例如
// T extends Array<PrimitiveType> ? "foo" : "bar"
// 我们无法判断 PrimitiveType 到底是什么类型
// 类似的还有函数返回类型，Promise等

// inter inference 推理

// 通常的使用方式是用于修饰作为类型参数的泛型， 如： infer R，R表示 待推断的类型。
// 通常 infer不会被直接使用，而是与条件类型一起，被放置在底层工具类型中。
// 如果说条件类型提供了延迟推断的能力，那么加上 infer 就是提供了基于条件进行延迟推断的能力。

const foo = () => {
  return 'linbudu';
};

// (...args: any[]) => infer R 是一个整体
type MyReturnType1<T> = T extends (...args: any[]) => infer R ? R : any;

// string
type FooReturnType = MyReturnType1<typeof foo>;

// 实际上这不够严谨，为啥不直接让传入函数呢
type MyReturnType2<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;

// const foo2 = 123;
// type FooReturnType2 = MyReturnType2<typeof foo2>;

// 现在我们仿造一个解包 Promise
async function syncFunc() {
  return 'sync';
}
const promise = syncFunc();

type PromiseProp<T extends Promise<any>> = T extends Promise<infer R>
  ? R
  : never;

// string
type StringProp = PromiseProp<typeof promise>;

// 另外，对于 TS 中函数重载的情况，使用 infer （如上面的 ReturnType）不会为所有重载执行推导过程，
// 只有最后一个重载（因为一般来说最后一个重载通常是最广泛的情况）会被使用。
