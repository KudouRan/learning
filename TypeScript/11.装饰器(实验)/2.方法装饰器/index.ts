const funcDecorator: MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
) => {
  const methods = descriptor.value;
  descriptor.value = () => {
    console.log(`------${methods()}`);
  };
};

const funcDecorator2: MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
) => {
  const methods = descriptor.value;
  descriptor.value = () => {
    return `*************${methods()}`;
  };
  // 如果方法装饰器返回一个值，它将用作该方法的属性描述符。
};

class Person1 {
  @funcDecorator
  public static demo() {
    return 'haha';
  }

  @funcDecorator2
  public say() {
    return '啦啦啦';
  }
}

Person1.demo();

console.log(new Person1().say());
