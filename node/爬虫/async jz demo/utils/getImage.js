const reqHtml = require('./reqHtml');
const cheerio = require('cheerio');


function getImage({
  href: url
}, userType, callback, item) {
  return reqHtml({
      url
    }, userType)
    .then((body) => {
      const $ = cheerio.load(body);
      const title = $('.entry-title').text();
      const time = $('.post-r-meta .timeago').text().split(' ')[0];
      let time0 = $('.post-r-meta .timeago').text();

      return new Promise(resolve => {
        let pageImage = {
          title: '',
          time,
          time0,
          images: []
        }
        $('#content-innerText img').each((index, element) => {
          pageImage.title = title;
          pageImage.images.push({
            url: $(element).attr('src')
          });
        });
        callback(pageImage, item);
        resolve(pageImage);
      });
    })
    .catch((err) => {
      console.log('getImage:', err);
    });
}

module.exports = getImage;