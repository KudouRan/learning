const getImgUrl = require('./utils/getImgUrl');
const getPageUrl = require('./utils/getPageUrl');

let option = {
  uri: 'http://aliyun.catlair.xyz:8888/',
  header: {
    // "User-Agent": 'MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0'
  }
};


(async () => {
  let urlObjArr = [];

  let urls = await getPageUrl(option);

  urls.forEach(url => {
    urlObjArr.push({
      title: '',
      url,
      imgs: []
    })
  });

  let urlOA = [];

  for (let i = 0; i < urlObjArr.length; i++) {
    option.uri = urlObjArr[i].url;
    let imgUrls = await getImgUrl(option);
    urlOA.push(imgUrls);
  }

  try {
    urlOA = await Promise.all(urlOA);
  } catch (error) {
    console.error('获取所有页面的图片出错');
  }

  console.log(urlOA);

})();