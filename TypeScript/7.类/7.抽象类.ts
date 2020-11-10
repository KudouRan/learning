//与接口不同,抽象类中可以有具体的成员实现,例如这里的move

abstract class Animal3 {
  //抽象方法
  //抽象方法在抽象类中没有主体,但是派生类中必须实现
  abstract makeSound(): void;

  move(): void {
    console.log('roaming the earth...');
  }
}

//抽象类无法实例化
// new Animal3();

class Dog3 extends Animal3 {
  //实现父类的抽象类
  makeSound() {
    console.log('汪汪汪');
  }
}

const dog3 = new Dog3();
dog3.makeSound();
dog3.move();

//和java一样,抽象类也是可以继承的
abstract class Dog4 extends Animal3 {
  abstract makeSound(): void;
}
