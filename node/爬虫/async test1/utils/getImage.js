const reqHtml = require('./reqHtml');
const cheerio = require('cheerio');


async function getImage() {
  return await reqHtml({
      url: 'http://192.168.18.129:8888/'
    }, 'chrome')
    .then((body) => {
      const $ = cheerio.load(body);
      const title = $('.entry-title').text();

      return new Promise(resolve => {
        let pageImage = {
          title: '',
          time: '2020-2-15',
          images: []
        }
        $('img').each((index, element) => {
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