function Gen(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

async function test() {
  let arr = [Gen(2000), Gen(100), Gen(3000)];
  console.log(Date.now());
  for (let item of arr) {
    console.log(Date.now(), item.then(console.log));
  }
}

test();
