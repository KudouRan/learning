const rp = require('request-promise-native');

function reqWebpage(op) {
  let options = Object.assign({}, {
    uri: 'http://192.168.18.129:8888',
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


  return rp(options)
    .then((a) => {
      return new Promise((resolve, _reject) => {
        resolve(a);
      });
    })
    .catch(err => {
      throw new Error(err);
    })
}

module.exports = reqWebpage;