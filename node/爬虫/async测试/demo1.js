async function run() {
  return Promise.reject('错误');
}

(async () => {
  let demo = await run().catch();
  console.log(demo);
})();

console.log('最先打印');

setTimeout(() => {
  console.log('延时');
}, 3000);