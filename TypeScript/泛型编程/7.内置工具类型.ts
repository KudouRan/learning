/**
 * ?
 */
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

/**
 * -?
 */
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

/**
 * readonly
 */
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

/**
 * -readonly
 * 官方工具中没有的
 */
type Writable<T> = {
  -readonly [K in keyof T]: T[K];
};

/**
 * 选择一些类型
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
interface A1 {
  a: string;
  b: boolean;
  c: number;
}
/**
 * 期望结果 A1["a"]类型 | A1["b"]类型
 */
type Part = MyPick<A1, 'a' | 'b'>;

// type Part = {
//   a: string;
//   b: boolean;
// };

/**
 * 排除一些类型
 */
// 这里需要用到 never
type MyExclude<T, U> = T extends U ? never : T;
//  "3" | "4" | "5"
type LeftFields = MyExclude<'1' | '2' | '3' | '4' | '5', '1' | '2'>;

/**
 *  剔除某些后的值类型
 */
type MyOmit<T, K extends keyof any> = MyPick<T, MyExclude<keyof T, K>>;

type Part2 = MyOmit<A1, 'a' | 'b'>;

// type Part2 = {
//   c: number;
// };

/**
 * 保留键名
 */
type MyExtract<T, U> = T extends U ? T : never;
// "1" | "2"
type RightFields = MyExtract<'1' | '2' | '3' | '4', '1' | '2' | '6'>;

/**
 * Record<Keys, Type> 生成以联合类型为键名（Keys），键值类型为 Type 的新接口
 */
type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type MyNav = 'a' | 'b' | 'c';
interface INavWidgets {
  widget: string[];
  title?: string;
  keepAlive?: boolean;
}
const router: MyRecord<MyNav, INavWidgets> = {
  a: { widget: [''] },
  b: { widget: [''] },
  c: { widget: [''] },
};

/**
 * 获取函数的返回值类型
 */
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

const bar = (a: number, b: string) => {
  return a + b;
};

// string
type barReturnType = MyReturnType<typeof bar>;

/**
 * 获取函数的参数类型
 */
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

// [a: number, b: string]
type barParameters = MyParameters<typeof bar>;

/**
 * 获取构造函数的参数类型
 */
type MyConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;

class Demo {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

type DemoConstructorParameters = MyConstructorParameters<typeof Demo>;

/**
 * 类返回的实例类型
 */
type MyInstanceType<T extends new (args: any) => any> = T extends new (
  args: any,
) => infer R
  ? R
  : any;

// Demo
type DemoInstanceType = MyInstanceType<typeof Demo>;

const demo1: DemoInstanceType = new Demo('zs');

/**
 * 从 T 中排除 null undefined
 */
type MyNonNullable<T> = T extends null | undefined ? never : T;

// string 直接就只有 string
type Baz = undefined | string;

// string
type FooBar = MyNonNullable<Baz>;
