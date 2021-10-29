function configurable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.configurable = value;
    // 如果访问器装饰器返回一个值，它将用作成员的属性描述符。
  };
}

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(true)
  get y() {
    return this._y;
  }
}

const point = new Point(0, 0);
