import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:3000/services', { waitUntil: 'networkidle0' });

  const info = await page.evaluate(() => {
    const main = document.querySelector('.quantum-page');
    const wrap = document.querySelector('.wrap');
    const body = document.body;
    
    return {
      body: {
        width: body.getBoundingClientRect().width,
        display: getComputedStyle(body).display
      },
      main: {
        width: main ? main.getBoundingClientRect().width : null,
        display: main ? getComputedStyle(main).display : null,
        marginLeft: main ? getComputedStyle(main).marginLeft : null
      },
      wrap: {
        width: wrap ? wrap.getBoundingClientRect().width : null,
        marginLeft: wrap ? getComputedStyle(wrap).marginLeft : null,
        display: wrap ? getComputedStyle(wrap).display : null
      }
    };
  });

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
