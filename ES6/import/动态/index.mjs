(async function () {
  const name = '艾奇';
  if (name === '艾奇') {
    const { default: age } = await import('./age.mjs');
    console.log('年龄为', age);
  }
})();
