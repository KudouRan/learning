const { Menu, getCurrentWindow } = require('electron').remote;

var rigthTemplate = [
  { label: '全选', accelerator: 'ctrl+a' },
  { label: '粘贴', accelerator: 'ctrl+v' },
  { label: '复制', accelerator: 'ctrl+c' },
];

var m = Menu.buildFromTemplate(rigthTemplate);

window.addEventListener('contextmenu', function (e) {
  //阻止当前窗口默认事件
  e.preventDefault();
  //把菜单模板添加到右键菜单
  m.popup({ window: getCurrentWindow() });
});
