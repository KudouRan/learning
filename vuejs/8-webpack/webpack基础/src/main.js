const add = require('./MathTools/add');

console.log('hello webpack');
console.log(add(20, 30));

//所有需要打包的都应该导入
require('./css/style.css');
require('./css/divcolor.less');