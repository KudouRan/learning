(function () {
  const { BrowserWindow } = require('electron').remote;

  const btn2 = document.querySelector('.btn2');

  let newWin = null;

  btn2.addEventListener('click', () => {
    if (newWin) {
      //不允许打开多个窗口
      return;
    }

    newWin = new BrowserWindow({
      width: 300,
      height: 300,
    });

    newWin.loadFile('yellow.html');

    newWin.on('close', () => {
      newWin = null;
    });
  });
})();
