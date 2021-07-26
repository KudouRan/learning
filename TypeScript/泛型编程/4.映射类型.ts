interface A {
  a: boolean;
  b: string;
  c: number;
  d: () => void;
}

// 假设需要一个和 A 类似的接口，但是所有的值都是 string
type Stringify<T> = {
  [keys in keyof T]: string;
};

type B = Stringify<A>;

// 要克隆一个一模一样的 C
type CloneA = {
  [K in keyof A]: A[K];
};

// type Clone<T> = {
//   [K in keyof T]: T[K];
// };

// 将接口下的字段全部变为可选的
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};
