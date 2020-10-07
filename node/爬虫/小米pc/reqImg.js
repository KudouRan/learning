const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
const request = require('request');
const rp = require('request-promise-native');

async function reqWebImg() {
  let options = {
    uri: 'https://mi.com',
    header: {
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7',
      'Cache-Control': 'max-age=0',
      Connection: 'keep-alive',
      Host: 'www.mi.com',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': 1,
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
    }
  };

  const html = await rp(options)['catch'](err => {
    console.log(err);
  });

  const $ = await cheerio.load(html);

  var imgObj = [];

  $('img').each((i, el) => {
    //i1.mifile.cn/f/i/2014/cn/placeholder-40.png
    if (
      $(el).attr().src !== '//i1.mifile.cn/f/i/2014/cn/placeholder-40.png' &&
      $(el).attr().src != undefined
    ) {
      imgObj.push({
        src: $(el).attr().src,
        alt: $(el).attr().alt || i.toString()
      });
    }
  });

  let dest = path.join(__dirname, '../img');

  for await (let img of imgObj) {
    let url = img.src;
    if (!/^http/.test(img.src)) {
      url = 'https:' + img.src;
    }
    let ext = path.extname(url);
    let name = img.alt;
    let imgPaths = path.join(dest, name) + ext;
    console.log(url);
    request(url)
      .pipe(fs.createWriteStream(imgPaths))
      .on('error', () => {
        // console.log(dest, '保存失败');
      });
  }
}

module.exports = reqWebImg;
