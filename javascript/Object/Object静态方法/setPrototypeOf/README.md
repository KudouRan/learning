`Object.setPrototypeOf()` 方法设置一个指定的对象的原型 ( 即, 内部`[[Prototype]]`属性）到另一个对象或 `null`。

警告: 由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的 `[[Prototype]]`在各个浏览器和 JavaScript 引擎上都是一个很慢的操作。其在更改继承的性能上的影响是微妙而又广泛的，这不仅仅限于 `obj.__proto__ = ...` 语句上的时间花费，而且可能会延伸到任何代码，那些可以访问任何`[[Prototype]]`已被更改的对象的代码。如果你关心性能，你应该避免设置一个对象的 `[[Prototype]]`。相反，你应该使用 `Object.create()`来创建带有你想要的`[[Prototype]]`的新对象。
