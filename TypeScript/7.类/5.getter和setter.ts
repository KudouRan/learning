class Person {
  private _age: number;
  constructor(_age: number = 18) {
    this._age = _age;
  }

  get age(): number {
    console.log('调用getter');
    return this._age - 15;
  }

  set age(age: number) {
    console.log('调用setter');
    this._age = age + 5;
  }
}

const me = new Person(27);

console.log(me.age); //12

me.age = 28;

console.log(me.age); //18
