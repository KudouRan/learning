const cheerio = require('cheerio');
const rw = require('./reqWebpages');

async function getPageUrl(options) {
  let rUrl = await rw(options)
    .then(body => {
      $ = cheerio.load(body);
      let urls = [];

      $('a').each((index, elem) => {
        urls.push($(elem).attr('href'));
      });
      return new Promise((resolve, reject) => {
        resolve({
          urls
        });
      });
    })
    .catch(err => {
      console.error('错误', err);
    });

  return rUrl;
}

module.exports = getPageUrl;