type numOrStrProp = number | string;

const isString = (arg: unknown): boolean => typeof arg === 'string';

// function useIt(numOrStr: numOrStrProp) {
//   if (isString(numOrStr)) {
//     // number 上不存在 length
//     console.log(numOrStr.length);
//   }
// }

// 使用 is
const isStringUseIs = (arg: unknown): arg is string => typeof arg === 'string';

function useIt(numOrStr: numOrStrProp) {
  if (isStringUseIs(numOrStr)) {
    console.log(numOrStr.length);
  }
}

class A {
  public a() {}

  public useA() {
    return 'A';
  }
}

class B {
  public b() {}

  public useB() {
    return 'B';
  }
}

function useIt2(arg: A | B): void {
  // B 上面没有 a
  // arg.a ? arg.useA() : arg.useB();
  'a' in arg ? arg.useA() : arg.useB();
}
