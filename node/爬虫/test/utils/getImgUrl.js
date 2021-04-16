const cheerio = require('cheerio');
const rw = require('./reqWebpages');
const path = require('path');

async function getImgUrl(option) {
  let body = await rw(option).catch(err => {
    console.error("获取图片链接失败", err);
  });
  let $ = cheerio.load(body);
  let title = $('title').text().split(' - ')[0];
  let href = option['uri'];
  let uid = path.basename(href, '.html') || '没有uid';
  let time = $('.post-r-meta time').attr('data-timeago') || '没有time';
  let urls = [];

  $('li img').each((_index, elem) => {
    urls.push($(elem).attr('src'));
  });

  return ({
    uid,
    href,
    title,
    time,
    urls
  });
}

module.exports = getImgUrl;