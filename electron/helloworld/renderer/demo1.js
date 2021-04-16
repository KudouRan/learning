(function () {
  const fs = require('fs');

  const btn1 = document.querySelector('.btn1');
  const showBox1 = document.querySelector('.showBox1');

  let isShow = false;

  btn1.addEventListener('click', () => {
    if (!isShow) {
      fs.readFile('demo1.txt', (err, data) => {
        showBox1.textContent = data;
      });
      btn1.textContent = '点击隐藏';
      isShow = true;
    } else {
      btn1.textContent = '点击加载水果';
      showBox1.textContent = '';
      isShow = false;
    }
  });
})();
