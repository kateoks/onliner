const SmartphonesPage = require('../pageobjects/smartphones.page');

describe('Mobile phones', () => {
    // beforeEach(async () => {
        
    // })

    it('should verify the title of page', async () => {
        await SmartphonesPage.open();
        await SmartphonesPage.mainOnliner.click();
        await SmartphonesPage.buttonRedirectToTV.click();
        // await SmartphonesPage.getsamsungPhonesListText();
        await expect(SmartphonesPage.pageTitle).toHaveText('Телевизоры');
    });
    
    it('should have a link', async () => {
        await expect(SmartphonesPage.buttonAppStore).toHaveHref('https://itunes.apple.com/app/apple-store/id1062235600?pt=118046116&ct=catalog-section&mt=8');
    });
});