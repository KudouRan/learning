function Gen(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

async function test() {
  let arr = [Gen(5000), Gen(500), Gen(8000)];
  console.log(Date.now());
  for (let item of arr) {
    console.log(Date.now(), await item.then(console.log));
  }
  console.log(Date.now());
}

test();
