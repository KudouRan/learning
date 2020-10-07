interface SquareConfig {
  color?: string;
  width: number;
}

function createSquare(config: SquareConfig2): { color: string; area: number } {
  let newSquare = { color: 'white', area: 0 };
  if (config.color) {
    newSquare.color = config.color;
  }
  newSquare.area = config.width * config.width;

  return newSquare;
}

// let mySquare = createSquare({ width: 12, colour: 'blue' });
//传入了一个colour而不是color,
//ts会认为你传入的参数有错误,而你并不认为它是错的
//可以用断言解决

let mySquare = createSquare({
  width: 12,
  opacity: 0.5,
} as SquareConfig);

console.log(mySquare);

//如果你确定这个对象本来就应该有除了定义的属性以外的其他属性
interface SquareConfig2 {
  color?: string;
  width: number;
  [propName: string]: any;
}

//这里还有第三种解决办法,只是你不应该想尽办法让自己跳坑里

// let squareOptions = {
//   colour: 'red',
//   width: 123,
// };

// createSquare(squareOptions);
