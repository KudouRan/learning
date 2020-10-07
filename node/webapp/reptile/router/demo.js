const express = require('express');
const imgPage = express.Router();

imgPage.get('/', (req, res) => {
  res.send('<h1>/imgPage<h1>');
});


for (let i = 1; i <= 8; i++) {
  imgPage.get('/page' + i, (req, res) => {
    let title = '爬虫测试页面' + i;
    res.send(getPage(title))
  })
}

function getPage(title = '爬虫测试页面') {
  return `
<!DOCTYPE html>
<html lang="zh-cmn-Hans">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    ul {
      width: auto;
      height: auto;
      list-style-type: none;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>

<body>
  <ul>
    <li><img src="http://127.0.0.1:8888/public/images/0a.jpg" alt="0a"></li>
    <li><img src="http://127.0.0.1:8888/public/images/1a.jpg" alt="1a"></li>
    <li><img src="http://127.0.0.1:8888/public/images/2a.jpg" alt="2a"></li>
    <li><img src="http://127.0.0.1:8888/public/images/3a.jpg" alt="3a"></li>
    <li><img src="http://127.0.0.1:8888/public/images/4a.jpg" alt="4a"></li>
    <li><img src="http://127.0.0.1:8888/public/images/5a.png" alt="5a"></li>
  </ul>
</body>

</html>
`;
}

module.exports = imgPage;