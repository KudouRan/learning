type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

// "string" | "function"
type T1 = TypeName<string | (() => void)>;

// "string" | "object"
type T2 = TypeName<string | string[]>;

// "object"
type T3 = TypeName<string[] | number[]>;

// 上面所有的类型都是 联合类型
// 再看看下面的

type Naked<T> = T extends boolean ? 'Y' : 'N';
type Wrapped1<T> = [T] extends [boolean] ? 'Y' : 'N';
type Wrapped2<T> = [T] extends [boolean | number] ? 'Y' : 'N';

// "N" | "Y" 联合类型
type Distributed = Naked<number | boolean>;

// "N"
type NotDistributed1 = Wrapped1<number | boolean>;

// "Y"
type NotDistributed2 = Wrapped2<number | boolean>;

// 从 NotDistributed1 看出使用 [] 包裹以后，类似于
// [number | boolean] extends [boolean]
// 所以结果只有一个 N ,而不是联合的 Y

