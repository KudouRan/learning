// const pErr = new Promise((resolve, reject) => {
//   reject('总是失败');
// });

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, '最终完成');
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, '很快完成');
});

// Promise.any ==> any 任意一个

// 任意一个成功
// Promise.any([pErr, pFast, pSlow])
//   .then((value) => {
//     console.log('成功', value);
//   })
//   .catch((err) => {
//     console.log('失败', err);
//   });

// 全部失败
// Promise.any([pErr])
//   .then((value) => {
//     console.log('成功', value);
//   })
//   .catch((err) => {
//     console.log('失败', err);
//   });

// 只用空 []
Promise.any([])
  .then((value) => {
    console.log('成功', value);
  })
  .catch((err) => {
    console.log('失败', err);
  });
