interface Foo {
  [keys: string]: string;
}
const o: Foo = {
  1: '芜湖！',
};

console.log(o[1] === o['1']); // true

type numOrStr = keyof Foo;

const num: numOrStr = 999;

// 由此可见 keyof Foo 是 number | string
