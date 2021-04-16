const puppeteer = require('puppeteer-core');
const cheerio = require('cheerio');


(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    // defaultViewport: {
    //   width: 1900,
    //   height: 1060
    // },
    // headless: false,
    // devtools: true,
    // slowMo: 250 // slow down by 250ms
  });


  const page = await browser.newPage();

  await page.goto('https://www.jdlingyu.mobi/');

  // page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.evaluate(() => {
    console.log(window);
  });

  let a = await cheerio.load(page.$('html'));
  a('.btn-pager button.empty').each((index, elem) => {
    console.log(index);
    console.log(elem);
    console.log(elem.type);
  })


  console.log(a);
  // 

  await page.evaluate(() => console.log(`url is ${location.href}`));

  // await page.goto('https://baidu.com');

})();