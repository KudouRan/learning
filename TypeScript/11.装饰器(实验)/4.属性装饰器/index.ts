import 'reflect-metadata';

// 属性装饰器没有参数，只是用来标记一个属性

const formatMetadataKey = Symbol('format');
function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class Greeter1 {
  @format('Hello, %s')
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    let formatString = getFormat(this, 'greeting');
    return formatString.replace('%s', this.greeting);
  }
}

console.log(new Greeter1('world').greet());
