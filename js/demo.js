Array.prototype.myPush = function (...arg) {
  for (const item of arg) {
    this[this.length] = item;
  }
  return this.length;
}

Array.prototype.myPop = function () {
  if (this.length > 0) {
    let temp;
    temp = this[this.length - 1];
    this.length--;
    return temp;
  } else {
    return undefined;
  }
}

Array.prototype.myShift = function () {
  if (this.length == 0) {
    return undefined;
  } else {
    let temp = this[0];
    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    this.length--;
    return temp;
  }
}

Array.prototype.myUnshift = function (...arg) {
  let temp = [...arg, ...this];
  for (let i = 0; i < temp.length; i++) {
    this[i] = temp[i];
  }
  return this.length;
}


// Array.prototype.myUnshift = function (...arg) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         temp[i] = this[i];
//     }
//     for (let i = 0; i < arg.length; i++) {
//         this[i] = arg[i];
//     }
//     const len = this.length;
//     for (let i = 0; i < temp.length; i++) {
//         this[len + i] = temp[i];
//     }
//     return this.length;
// }

// Array.prototype.myUnshift = function (...arg) {
//     for (var i = this.length + arg.length - 1; i >= 0; i--) {
//         if (i > arg.length - 1) {
//             this[i] = this[i - arg.length];
//         } else {
//             this[i] = arg[i];
//         }
//     }
//     return this.length;
// }