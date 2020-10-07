const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
  });
  const page = await browser.newPage();
  await page.goto('https://www.jdlingyu.mobi/mzitu/61743.html', {
    waitUntil: 'networkidle2'
  });
  await page.pdf({
    path: 'hn.pdf',
    format: 'A4'
  });

  await browser.close();
})();