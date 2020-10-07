const reqHtml = require('./reqHtml');
const cheerio = require('cheerio');


async function getImage(number) {
  return await reqHtml({
      url: `https://www.jdlingyu.mobi/mzitu/${number}.html`
    }, 'chrome')
    .then((body) => {
      const $ = cheerio.load(body);
      const title = $('.entry-title').text();
      const time = $('.post-r-meta .timeago').text().split(' ')[0];

      return new Promise(resolve => {
        let pageImage = {
          title: '',
          time,
          images: []
        }
        $('#content-innerText img').each((index, element) => {
          pageImage.title = title;
          pageImage.images.push({
            url: $(element).attr('src'),
          });
        });
        resolve(pageImage);
      });
    })
    .catch((err) => {
      console.log('getImage:', err);
    });
}

module.exports = getImage;