const rp = require('request-promise-native');

async function reqWebpage(op) {
  let options = Object.assign({}, {
    uri: 'http://127.0.0.1:8888',
    method: 'GET'
  }, op);

  options.header = Object.assign({}, {
    'Connection': 'keep-alive',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36 Edg/80.0.361.54'
  }, op.header);

  if (options.uri === '' || options.uri === undefined) {
    throw new Error('请求链接(uri)为空或者不存在');
  }

  let req = await rp(options).catch(err => {
    console.error("请求链接失败");
    console.error(err.name, err.statusCode);
    console.error("请求头:", err.options);
  });

  //避免某一个网址出错而全局崩盘
  return req || [];
}

module.exports = reqWebpage;