import { JSDOM } from "jsdom"
import puppeteer from "puppeteer";

const getResults = async () => {
    
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  console.log('function start')
  // Navigate the page to a URL
  await page.goto('https://www.autotrader.ca/cars/toyota/corolla/sk/saskatoon/?rcp=100&rcs=0&srt=35&prx=100&prv=Saskatchewan&loc=S7M%204W2&hprc=True&wcp=True&sts=New-Used&inMarket=basicSearch', { timeout:60000 })
    // page.waitForNavigation({ waitUntil: 'networkidle0' })

  await page.setViewport({ width: 1080, height: 1024 });

  // await page.waitForFunction(() => {
  //   return document.querySelectorAll('select#pageSize').length > 0;
  // });

  // await page.select('select#pageSize', '100');
  console.log('page loaded');
  await page.waitForFunction(() => {
    return document.querySelectorAll('#result-item-inner-div').length > 0;
  });
  console.log('page loaded #result-item-inner-div');
  const html = await page.content();
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const results = [...document.querySelectorAll('#result-item-inner-div')]

  let output = [];
  for (let result of results) {
    output.push({
      name: (result.querySelector('span.title-with-trim')?.textContent || 'n/a').trim(),
      mileage: (result.querySelector('span.odometer-proximity')?.textContent || 'n/a').trim(),
      price: (result.querySelector('#price-amount-value')?.textContent || 'n/a').trim(),
      dealer: (result.querySelector('div.seller-name')?.textContent || 'n/a').trim(),
    });    
  }

  console.log(output);
  await browser.close();

  // return output;
}


export default getResults