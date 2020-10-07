const path = require('path');
const fs = require('fs');
const request = require('request');


function saveFile(imgs) {
  let title = imgs['title'];
  let urls = imgs['images'].map(element => element['url']);
  let timeago = imgs['time'];
  let i = 1;

  let dest = path.join(__dirname, '../img', title + timeago);

  let flag = true;
  try {
    fs.mkdirSync(dest);
  } catch (error) {
    console.log('目录已经存在');
    flag = false;
  }

  if (flag) {
    for (let url of urls) {
      let ext = path.extname(url);
      let name = path.basename(url, ext);
      let imgPaths = path.join(dest, i + '_' + name) + ext;
      request(url)
        .pipe(fs.createWriteStream(imgPaths))
        .on('error', () => {
          console.log(dest, '保存失败');
        })
        .on('finish', () => {
          console.log(name, '保存成功!');
        })
      i++;
    }
  }

}

module.exports = saveFile;