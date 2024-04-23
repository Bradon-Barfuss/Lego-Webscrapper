const puppeteer = require('puppeteer');
const TIMEOUT = 10000; // 60 seconds timeout


async function scrapeData(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
        await page.goto("https://www.lego.com/en-us/themes/star-wars");

        const productLinks = await page.evaluate(() => Array.from(document.querySelectorAll
            ('[data-test="product-item"] [data-test="product-leaf-title"]'), (e) => e.href));

        await console.log(productLinks);
        await console.log(productLinks.length);

        const productTable = [];
        for (const link of productLinks){
            console.log(productTable);
            console.log(link);
            await page.goto(link);
            
            const data = await page.evaluate((link) => {
                const url = window.document.url;

                const nameElement = document.querySelector('[data-test="product-overview-name"] span');
                const name = nameElement ? nameElement.innerText : null;
            

                const costElement = document.querySelector('[data-test="product-price"]');
                const costText = costElement ? costElement.innerText : null;
                const cost = costText ? costText.split('$')[1] : null;

                const itemNumberElement = document.querySelector('[data-test="item-value span"]');
                const itemNumber = itemNumberElement ? itemNumberElement.innerText : null;
                return {link, name, cost, itemNumber }; 
            },link);

            productTable.push(data);


        }
        console.log(productTable.length)
        console.log(productTable);
        return productTable;
        

    } catch (error) {
        console.error('Error scraping data:', error.message); // Log error message
        console.error('Stack trace:', error.stack); // Log stack trace
        return null;
      } finally {
        await browser.close();
      }
}

module.exports = { scrapeData };
