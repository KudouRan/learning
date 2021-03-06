const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    defaultViewport: {
      width: 1900,
      height: 1060
    },
    executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
  });
  const page = await browser.newPage();
  await page.goto('https://baidu.com');
  await page.screenshot({
    path: 'example.png'
  });
  await browser.close();
})();