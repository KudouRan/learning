let a: number[] = [1, 2, 3, 4, 5];

let ro: ReadonlyArray<number> = a;

//错误
// ro[1] = 123;

//错误
// ro.push(1);

//错误
// ro.length = 100;

//也不能把只读数组分配给普通数组
// a = ro;

//当然使用断言是可以的

//a = ro as number[];
a = <Array<number>>ro;

console.log(a);
