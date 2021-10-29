"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 参数是 Function 类型，是类的 “构造函数”
function classDecorator(constructor) {
    // 匿名类
    // 如果类装饰器返回一个值，它将用提供的构造函数替换类声明。
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    };
}
let Greeter = class Greeter {
    property = 'property';
    hello;
    constructor(m) {
        this.hello = m;
    }
};
Greeter = __decorate([
    classDecorator,
    __metadata("design:paramtypes", [String])
], Greeter);
console.log(new Greeter('world'));
/**
 * 给原型添加内容
 */
const classDecorator2 = (target) => {
    target.prototype.say = () => {
        console.log('hello');
    };
};
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    classDecorator2,
    __metadata("design:paramtypes", [String])
], Person);
const p = new Person('zhangsan');
console.log(p);
p.say();
