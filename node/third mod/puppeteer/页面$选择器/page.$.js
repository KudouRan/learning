const pptr = require('puppeteer');

(async () => {
  const browser = await pptr.launch({
    executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    headless: false
  });

  const page = await browser.newPage();

  page.setDefaultNavigationTimeout(0);

  await page.goto('https://www.jdlingyu.mobi/', 90000);

  await setTimeout(async () => {
    let a = await page.$$('.btn-pager .empty', 90000);
    let a2 = a[1];
    a2.click();
  }, 3000)

  await setTimeout(async () => {
    let a = await page.$$('.btn-pager .empty', 90000);
    let a2 = a[1];
    a2.click();
  }, 3000)

  await setTimeout(() => {
    browser.close();
  }, 3000)

})();