const path = require('path');
const fs = require('fs');
const request = require('request');


async function saveFile(imgs) {
  let title = imgs['title'];
  let urls = imgs['images'].map(element => element['url']);
  let timeago = imgs['time'];
  let i = 1;

  let dest = path.join(__dirname, '../img', title + timeago);

  try {
    fs.mkdirSync(dest);
  } catch (error) {
    console.log('目录已经存在');
  }


  for await (let url of urls) {
    let ext = path.extname(url);
    let name = i + '_' + path.basename(url, ext);
    let imgPaths = path.join(dest, name) + ext;
    request(url).pipe(fs.createWriteStream(imgPaths)).on('error', () => {
      console.log(dest, '保存失败');
    });

    i++;
  }

  return new Promise(resolve => {
    resolve('操作完成');
  })

}

module.exports = saveFile;