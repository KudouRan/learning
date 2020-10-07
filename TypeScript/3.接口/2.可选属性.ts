interface SquareConfig {
  color?: string;
  width: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  newSquare.area = config.width * config.width;

  return newSquare;
}

let mySquare = createSquare({ width: 12 });

console.log(mySquare);
