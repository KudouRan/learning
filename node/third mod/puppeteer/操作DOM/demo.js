const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });
  const __IMAGE__ = fs.readFileSync('./img/success.png');
  const page = await browser.newPage();

  await page.setRequestInterception(true);

  page.on('request', async (request) => {
    // 拦截图像资源的请求
    if (request.resourceType() === 'image') {
      // 返回替换的图像
      request.respond({
        // http状态码
        state: 200,
        // 返回的文件类型
        contentType: 'image/jpeg',
        // 返回文件的具体内容, 接受String或Buffer作为参数
        body: __IMAGE__
      })
      return;
    }
    //不处理其他资源的请用
    request.continue();
  });

  await page.waitFor(1000);

  page.setDefaultNavigationTimeout(0);

  await page.goto('https://www.jdlingyu.mobi/');

  let jumpPage = await page.$('.jump-page input');

  await page.evaluate(input => {
    input.value = 7;
  }, jumpPage)

  await jumpPage.press('Enter');

  // let html = await page.content();

  let html = await page.evaluate(() => {
    console.log(document.querySelector('.grid-bor').innerText);
  })

  console.log(html.toString());

  const $ = cheerio.load(html.toString(), {
    decodeEntities: false
  });

  console.log($('.grid-bor').html());

})();