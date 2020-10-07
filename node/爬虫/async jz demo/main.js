const path = require('path');
const saveFile = require('./utils/saveFile');
const getImage = require('./utils/getImage');
const reqHtml = require('./utils/reqHtml');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const fs = require('fs');


const userType = 'chrome';
let globalImg = [];

console.log('启动成功!');

async function getPage() {
  return reqHtml({
      url: `https://www.jdlingyu.mobi/`
    }, userType)
    .then(body => {
      const $ = cheerio.load(body);
      let page = [];
      $('.grid-bor .grid-item h2').each((index, elem) => {
        let aElem = $(elem).children('a');
        let title = aElem.text();
        let href = aElem.attr('href');
        let uid = path.basename(href, '.html');
        page.push({
          uid,
          title,
          time: '',
          href,
          images: []
        })
      })
      return new Promise(resolve => {
        resolve(page);
      })
    })
}

getPage()
  .then((data) => {
    // console.log(data);
    for (const item of data) {
      getImage(item, 'chrome', callback, item)
        .then((imgs) => {
          // saveFile(imgs);
        })
    }
  }).then(() => {
    console.log('成功操作完一页');
  })

function getImgData(item) {
  globalImg.push(item);
}

function callback(imgs, item) {
  let {
    time0: time,
    images
  } = imgs;
  images = images.map((elem) => elem['url']);
  // console.log(images);
  item['images'] = images;
  item['time'] = time;
  getImgData(item);
}


setTimeout(() => {
  console.log(globalImg);
  fs.writeFile('./data.js', JSON.stringify(globalImg, null, '\t'), () => {
    console.log('ok');
  });
}, 10000);