const rp = require('request-promise-native');

async function reqWebpage(options) {
  //参数覆盖默认header
  const header = Object.assign({}, {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0",
    'Accept': 'application/json, text/plain, */*',
    "Accept-Language": 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': '18',
    'Connection': 'keep-alive',
    'TE': 'Trailers',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache'
  }, options.header);

  const op = Object.assign({}, {
    uri: 'https://www.jdlingyu.mobi/wp-admin/admin-ajax.php?action=zrz_load_more_posts',
    method: 'POST',
    form: {
      type: 'index',
      paged: '2'
    },
    qs: {
      action: 'zrz_load_more_posts'
    }
  }, options, {
    header
  });

  const json = await rp(op)
    .catch(err => {
      console.log(err);
    });

  // const $ = cheerio.load(JSON.parse(json).msg);

  // $('.grid-item .thumb.pos-r a').each((_i, el) => {
  //   console.log($(el).attr('href'));
  // })

}

reqWebpage({
  uri: '传入',
  method: 'get',
  form: {
    type: 'index',
    paged: '122'
  },
  qs: {
    action: 'zrz_load_more_posts'
  },
  header: {
    'Pragma': 'no-cache测试',
    'Cache-Control': 'no-ca测试che'
  }
})

// module.exports = reqWebpage;