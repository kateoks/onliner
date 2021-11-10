const Page = require('./page');

class OnlinerCleverPage extends Page {
    
    get navigationClover () {
        return $('a[class *="b-top-navigation-clover"]');
    };

    async open () {
        await super.open(`/`);
    };
}

module.exports = new OnlinerCleverPage();