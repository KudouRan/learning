class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

//错误
//因为SelectableControl中包含私有属性state,
//所以只能通过Control的子类实现
// class ImageControl implements SelectableControl {}

