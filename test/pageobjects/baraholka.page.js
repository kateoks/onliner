const Page = require('./page');

class BaraholkaPage extends Page {
    
    get pageTitle () { 
        return $('h1[class *=m-title-i]');
    };
    get inputInBaraholka () { 
        return $('input[id=fleaMarketSearchInput]');
    };
    get buttonInBaraholka () {
        return $('a[class *= b-btn-fleamarket__1]');
    };

    async open() {
        await browser.url("https://baraholka.onliner.by/");
      }
}

module.exports = new BaraholkaPage();