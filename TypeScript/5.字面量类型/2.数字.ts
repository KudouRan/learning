type num = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): num {
  //断言
  return (Math.floor(Math.random() * 6) + 1) as num;
}

const result = rollDice();
console.log(result);

//但是上面这不是常见的用法
//看下面

interface MapConfig {
  lng: number; //经度
  lat: number; //纬度
  tileSize: 8 | 16 | 32; //限定参数只能是8,16,32
}

function setupMap(config: MapConfig): number {
  return config.tileSize; //随便返回一个吧
}

setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
