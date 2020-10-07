const cheerio = require('cheerio');
const rw = require('./reqWebpages');

async function getPageUrl(options) {

  let body = await rw(options)
    .catch(err => {
      console.error('获取页面链接错误', err);
    });

  let $ = cheerio.load(body);

  let urls = [];

  $('a').each((_index, elem) => {
    urls.push($(elem).attr('href'));
  });

  return urls;
}

module.exports = getPageUrl;