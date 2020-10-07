class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  public greet() {
    return 'Hello,' + this.greeting;
  }
}
let greeter = new Greeter('world');

console.log(greeter.greet());

class Animal {
  static move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

Animal.move();
