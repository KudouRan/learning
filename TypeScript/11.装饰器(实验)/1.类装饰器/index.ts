// 参数是 Function 类型，是类的 “构造函数”
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T,
) {
  // 匿名类
  // 如果类装饰器返回一个值，它将用提供的构造函数替换类声明。
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

@classDecorator
class Greeter {
  property = 'property';
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter('world'));

/**
 * 给原型添加内容
 */

const classDecorator2: ClassDecorator = (target: Function) => {
  target.prototype.say = () => {
    console.log('hello');
  };
};

@classDecorator2
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person('zhangsan');
console.log(p);

(<any>p).say();
