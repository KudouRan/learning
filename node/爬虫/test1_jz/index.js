const requestPromise = require('./utils/resPromise');
const download = require('./utils/download');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');

function hasFileAndSave(src, dest) {
  fs.stat(dest, (err) => {
    if (err) {
      download(src, dest).then(() => {
        console.log('成功');
      });
    } else {
      throw new Error('文件已存在');
    }
  })
}

function getImages(number) {
  requestPromise({
      url: `https://www.jdlingyu.mobi/mzitu/${number}.html`
    }, 'firefox')
    .then((body) => {
      const $ = cheerio.load(body);
      const title = $('.entry-title').text();
      const timeago = $('.post-r-meta .timeago').text().split(' ')[0];
      $('#content-innerText img').each((index, element) => {
        let src = $(element).attr('src')
        let ext = path.extname(src);
        let name = index.toString() + '_' + path.basename(src, ext);
        let dest = path.join(__dirname, './img', title + timeago, name) + ext;
        hasFileAndSave(src, dest);
      });
    })
    .catch((err) => {
      console.error(err);
    })
}

getImages(58255);