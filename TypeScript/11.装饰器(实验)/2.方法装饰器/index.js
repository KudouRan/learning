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
const funcDecorator = (target, propertyKey, descriptor) => {
    const methods = descriptor.value;
    descriptor.value = () => {
        console.log(`------${methods()}`);
    };
};
const funcDecorator2 = (target, propertyKey, descriptor) => {
    const methods = descriptor.value;
    descriptor.value = () => {
        return `*************${methods()}`;
    };
    // 如果方法装饰器返回一个值，它将用作该方法的属性描述符。
};
class Person1 {
    static demo() {
        return 'haha';
    }
    say() {
        return '啦啦啦';
    }
}
__decorate([
    funcDecorator2,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Person1.prototype, "say", null);
__decorate([
    funcDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Person1, "demo", null);
Person1.demo();
console.log(new Person1().say());
