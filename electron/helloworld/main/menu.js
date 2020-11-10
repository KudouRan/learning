const { Menu } = require('electron');
const { BrowserWindow } = require('electron');

const yellowPage = () => {
  newWin = new BrowserWindow({
    width: 300,
    height: 300,
  });

  newWin.loadFile('yellow.html');

  newWin.on('close', () => {
    newWin = null;
  });
};

var template = [
  {
    label: '凤来怡洗浴会所',
    submenu: [
      { label: '精品SPA', click: yellowPage, accelerator: `ctrl+n` },
      { label: '泰式按摩' },
    ],
  },
  {
    label: '大浪淘沙洗浴中心',
    submenu: [{ label: '牛奶玫瑰浴' }, { label: '爱情拍拍手' }],
  },
];

var m = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(m);
