const getImgUrl = require('./utils/getImgUrl');
const getPageUrl = require('./utils/getPageUrl');

let option = {
  uri: 'return',
  header: {
    // "User-Agent": 'MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0'
  }
}


getPageUrl(option)
  .then(({
    urls
  }) => {
    let urlObjArr = [];
    urls.forEach(url => {
      urlObjArr.push({
        title: '',
        url,
        imgs: []
      })
    });

    return new Promise((resolve) => {
      resolve(urlObjArr);
    })
  })

  .then(noUrlOA => {

    let urlOA = [];

    return (async function () {
      for (let i = 0; i < noUrlOA.length; i++) {
        option.uri = noUrlOA[i].url
        let imgUrls = await getImgUrl(option);
        urlOA.push(imgUrls);
      }

      return Promise.all(urlOA);
    }())

  })

  .then((UrlOA) => {
    console.log(UrlOA);
  })

  .catch((err) => {
    console.log(err);
    console.log('由于上面不可能出错,所以这个是假的');
  })