import { JSDOM } from "jsdom";

export default async function SourceB(browser, searchData) {
    const page = await browser.newPage(); 
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36');

    console.log('fetching from Source B')

    const url = `https://www.facebook.com/marketplace/saskatoon/vehicles?maxYear=2005&minYear=1998&exact=false`

    await page.goto(url, { timeout:60000 }); // Enable retry, error handling, ..
    // page.waitForNavigation({ waitUntil: 'networkidle0' })

    await page.setViewport({ width: 1080, height: 1024 });

    console.log('page loaded');

    const closeButton = await page.waitForSelector('div[aria-label="Close"]');

    // Click on the element
    await closeButton.click();


    const Make = await page.waitForSelector('span ::-p-text(Make)');
    await Make.click();
    const model = await page.waitForSelector('span ::-p-text(Audi)');
    await model.click();

    
}