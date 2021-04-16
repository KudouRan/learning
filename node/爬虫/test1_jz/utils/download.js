const request = require('request');
const fs = require('fs');
const path = require('path');

function download(src, dest) {

  fs.mkdir(path.dirname(dest), (err) => {
    if (!err) {
      console.log('开始下载');
    }
  });

  request(src).pipe(fs.createWriteStream(dest)).on('error', () => {
    console.log(dest, '保存失败');
  });
}

module.exports = download;