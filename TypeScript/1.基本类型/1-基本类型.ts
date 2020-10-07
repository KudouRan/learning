/**
 * 布尔
 */
let isDone: boolean = false;

/**
 * 数值
 */
let decimal: number = 6;

/**
 * 字符串
 */
let fullName: string = 'catlair';
//字符串支持模板形式
let sentence: string = `Hello, my name is ${fullName}`;

/**
 * 数组
 */
let list1: number[] = [1, 2, 3];
//或者Array<elemType>
let list2: Array<number> = [1, 2, 3];

/**
 * 元组
 * 已知类型和长度
 */

let x: [string, number] = ['hello', 10];
//x = [10, 'hello']; // Error

/**
 * 枚举
 */
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

console.log(c);
//log 1

//枚举还能手动设置所有值

enum Color1 {
  Red = 1,
  Green = 2,
  Blue = 4,
  Pink,
}
let c1: Color1 = Color1.Pink;

console.log(c1);
//log 5
//每个成员的编号是上一个+1,所以c1是5

//由值查找名称
let colorName: string = Color[3];
console.log(colorName);
//log undefined

let colorName1: string = Color[2];
console.log(colorName1);
//log Blue

/**
 * Any
 * 任何
 */

let notSure1: any = 4;
notSure1 = 'maybe a string instead';

let notSure2: any = 4;
notSure2.ifItExists(); // okay, ifItExists 可能在运行时存在
notSure2.toFixed(); // okay, toFixed 存在(编译器也不会检检查)

let prettySure: Object = 4;
//prettySure.toFixed(); // Error: 对象上没这个属性

/**
 * Void
 * 根本没有任何类型
 */

function warnUser(): void {
  console.log('This is my warning message');
}

/**
 * Null and Undefined
 *
 */

let u: undefined = undefined;
let n: null = null;
//上面用法并不是很有用,这两个其实可以给任何类型(其它类型为空时不就是他们吗)
//只是对于void类型有点意外

/**
 * Never
 * 不会发生的类型
 * 是所有类型的子类型,可以分配给任何类型,反之不可
 */

function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('Something failed');
}

function infiniteLoop(): never {
  while (true) {}
}

/**
 * 对象
 * 表示非原始类型
 * 即不是 number,String,boolean,bigint,Symbol,null和undefined的类型
 */

declare function create(o: object | null): void;

/**
 * 类型断言
 * 就像类型转换
 * 告诉编译器,我知道这是什么类型
 */

//下面两种是等效的
//但是在使用jsx和ts时,只能用as,不能用<>的方式

let someValue: any = 'this is a string';

let strLength: number = (<string>someValue).length;

let strLength1: number = (someValue as string).length;
