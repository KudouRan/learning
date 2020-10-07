interface ClockInterface {
  currentTime: Date; //属性
  setTime(d: Date): void; //方法
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
