//public, private, and protected modifiers

//默认是public的

//ts3.8支持es的新语法,#私有属性
class Animal1 {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
}

//无法访问专有标识成员#name
// new Animal1('Cat').#name;

//ts自己的private声明

class Animal2 {
  private name: string;

  constructor(theName: string) {
    this.name = theName;
  }
}

//无法访问私有成员
// new Animal2('Cat').name;

//实际上编译出的js是
// "use strict";
// class Animal2 {
//     constructor(theName) {
//         this.name = theName;
//     }
// }
//
// new Animal2('Cat').name;

//这在js引擎中执行完全是没问题的
//private只是在ts中报错
