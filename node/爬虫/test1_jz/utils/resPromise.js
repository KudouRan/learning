const request = require('request');

const userAgent = {
  chrome: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'
  },
  firefox: {
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0'
  },
  chromiumEdge: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36 Edg/80.0.361.54'
  }
}

function requestPromise(option, userType) {
  let op = Object.assign({}, {
    url: '',
    method: 'GET',
    encoding: 'utf-8',
    header: {
      'User-Agent': userAgent[userType]
    }
  }, option);
  if (op.url === '') {
    throw new Error('请求地址怎么能为空呢');
  }
  return new Promise((resolve, reject) => {
    request(op, (err, res, body) => {
      if (err) reject(err);
      if (res && res.statusCode === 200) {
        resolve(body);
      } else {
        reject(`请求${op.url}失败`);
      }
    });
  });
}

module.exports = requestPromise;