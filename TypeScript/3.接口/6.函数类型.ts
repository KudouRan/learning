interface SearchFunc {
  (source: string, subString: string): Boolean;
}

let mySearch: SearchFunc = function (
  source: string,
  subString: string
): boolean {
  return source.search(subString) > -1;
};

console.log(mySearch('dsjkfls', 'j'));

//函数参数名可以不匹配
let mySearch1: SearchFunc;

mySearch1 = function (src: string, sub: string): boolean {
  return src.search(sub) > -1;
};

//甚至你不需要在给函数的参数和返回值限定类型化,ts会自动判断

let mySearch2: SearchFunc = function (src, sub) {
  // return 'asda'; //错误,必须是boolean
  return src.search(sub) > -1;
};
