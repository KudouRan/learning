//声明一个别名
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      //
    } else if (easing === 'ease-out') {
      //
    } else if (easing === 'ease-in-out') {
      //
    }
  }
}

let button = new UIElement();

button.animate(0, 0, 'ease-in');
// button.animate(0, 0, 'kljsadla'); //错误

//使用下面这种重载的方式也能限制参数只能传入部分内容
//除了'img'和'input'其他的都是错误参数

function createElement(tagName: 'img'): HTMLImageElement;
function createElement(tagName: 'input'): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
  // ... code goes here ...
  return document.createElement(tagName);
}
