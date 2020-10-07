//js中存在大量通过参数决定返回值类型的函数,
//如果要让ts能够给出更好的提示,可以用函数重载的方式
//下面的例子重载了含糊pickCard,
//1. 当参数是对象数组时,返回数字
//2. 当参数是数字时,返回对象
//注意这里的pickCard(x:any):any不是重载

let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
  if (typeof x == 'object') {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 },
];

let pickedCard1 = myDeck[pickCard(myDeck)];
alert('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
