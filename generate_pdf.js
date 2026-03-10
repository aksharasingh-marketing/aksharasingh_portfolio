const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set explicit 16:9 1080p landscape or nice portrait dimensions
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
  
  // Navigate to export page and wait till fully loaded
  await page.goto('http://localhost:3000/export', { waitUntil: 'networkidle0' });
  
  // A small scroll down and up just in case any lazy items need it, not strictly required with our CSS bypass
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.evaluate(() => window.scrollTo(0, 0));
  
  // Generate PDF
  await page.pdf({
    path: 'Akshara_Singh_Portfolio.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });

  await browser.close();
  console.log('PDF Generated Successfully: Akshara_Singh_Portfolio.pdf');
})();
