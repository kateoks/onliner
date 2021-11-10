const Page = require('./page');

class DollarRatePage extends Page {
    
    get currencyAmount() { 
        return $('span[class *="_u js-currency-amount"]'); 
    };

    async open () {
        await browser.url('https://www.onliner.by/');
    };
}

module.exports = new DollarRatePage();