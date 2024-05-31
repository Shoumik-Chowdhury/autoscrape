import { JSDOM } from "jsdom"

export default async function SourceA(browser, searchData) {
    const page = await browser.newPage(); 
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36');

    console.log('fetching from Source A')
    
    const url = `https://www.autotrader.ca/cars/${searchData.make}/${searchData.model}/${searchData.province}/${searchData.city}/?rcp=100&rcs=0&srt=35&yRng=${searchData.minYear}%2C${searchData.maxYear}&prx=${searchData.radius}&prv=Saskatchewan&loc=${searchData.location}&hprc=True&wcp=True&sts=New-Used&inMarket=advancedSearch`;
    
    const maxRetries = 2;
    let retries = 0;

    while (retries < maxRetries) {
        try {
        await page.goto(url, { timeout: 60000 });
        break;
        } catch (error) {
        console.error(`Failed to load page. Retrying (${retries + 1}/${maxRetries})...`);
        retries++;
        }
    }

    await page.setViewport({ width: 1080, height: 1024 });

    await page.waitForSelector('#result-item-inner-div');


    await page.waitForFunction(() => {
        return document.querySelectorAll('#result-item-inner-div').length > 0;
    });

    console.log('page loaded');

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

    await browser.close();
    console.log("browser closed")
    
    return Response.json({output})
}