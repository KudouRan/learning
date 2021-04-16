function Gen(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

async function test() {
  let arr = [Gen(5000), Gen(500), Gen(8000)];
  console.log('开始', Date.now());
  for await (let item of arr) {
    console.log(Date.now(), item);
  }
  console.log(Date.now());
}

test();
