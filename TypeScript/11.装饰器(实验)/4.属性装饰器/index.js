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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// 属性装饰器没有参数，只是用来标记一个属性
const formatMetadataKey = Symbol('format');
function format(formatString) {
    return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target, propertyKey) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
class Greeter1 {
    greeting;
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, 'greeting');
        return formatString.replace('%s', this.greeting);
    }
}
__decorate([
    format('Hello, %s'),
    __metadata("design:type", String)
], Greeter1.prototype, "greeting", void 0);
console.log(new Greeter1('world').greet());
