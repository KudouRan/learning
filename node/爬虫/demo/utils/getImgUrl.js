const cheerio = require('cheerio');
const rw = require('./reqWebpages');
const path = require('path');

async function getImgUrl(options) {
  let rUrl = await rw(options)
    .then(body => {
      let $ = cheerio.load(body);
      let title = $('title').text().split(' - ')[0];
      let href = options['uri'];
      let uid = path.basename(href, '.html');
      let time = $('.post-r-meta time').attr('data-timeago');
      let urls = [];

      $('#content-innerText img').each((_index, elem) => {
        urls.push($(elem).attr('src'));
      });
      return new Promise((resolve, _reject) => {
        resolve({
          uid,
          href,
          title,
          time,
          urls
        });
      });
    })
    .catch(err => {
      console.error(err);
    });

  return rUrl;
}

module.exports = getImgUrl;