const Page = require('./page');

class SmartphonesPage extends Page {
    get mainOnliner (){
        return $('img[class="onliner_logo"]');
    };
    get buttonRedirectToTV () {
        return $('//a[contains(@class, "project-navigation__link project-navigation__link_subsidiary")] // span[contains(text(), "Телевизоры")]')
    };
    get pageTitle () { 
        return $('h1[class*=schema-header__title]');
    };
    get buttonAppStore () { 
        return $('a[class = "schema-filter__store-item schema-filter__store-item_apple"]');
    };
    get samsungPhones () {
        return $$('//a[contains(@data-bind,"attr: {href: product.html_url}")] // span[contains(text(),  "Samsung")]');
    };

    async getsamsungPhonesListText() {
        await this.samsungPhones.map( async (el) => console.log( await el.getText()));
    }

    async open () {
        await super.open(`/`);
    };
}

module.exports = new SmartphonesPage();