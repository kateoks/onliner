const ProcessoryPage = require('../pageobjects/processory.page');

describe('Processory page', () => {
    it('should redirect to page "Processory"', async () => {
        await ProcessoryPage.open();
        await browser.newWindow('https://catalog.onliner.by/cpu');
        await browser.switchWindow('https://catalog.onliner.by/cpu');
        await expect(ProcessoryPage.titleOfProcessoryPage).toBeDisplayed();
    });

    it('should click and show message', async () => {
        await ProcessoryPage.choiceOfBuyers.click();
        await expect(ProcessoryPage.messageFromChoiceOfBuyers).toBeDisplayed();
    });

    it('should click and show button "Ads"', async () => {
        await ProcessoryPage.labelAds.click();
        await expect(ProcessoryPage.buttonAds).toBeDisplayed();
    });

    it('should click and redirect to new pade "Sign In"', async () => {
        await ProcessoryPage.buttonAds.click();
        await browser.newWindow('https://profile.onliner.by/login?redirect=https%3A%2F%2Fcatalog.onliner.by%2Fused%2Fcreate')
        await browser.switchWindow('https://profile.onliner.by/login?redirect=https%3A%2F%2Fcatalog.onliner.by%2Fused%2Fcreate')
        await expect(ProcessoryPage.pageSihnIn).toBeDisplayed();
    });

    it('should open new window "Google Play"', async () => {
        await browser.newWindow('https://catalog.onliner.by/cpu?segment=second&utm_source=catalog_tile&utm_medium=cpu')
        await browser.switchWindow('https://catalog.onliner.by/cpu?segment=second&utm_source=catalog_tile&utm_medium=cpu')
        await ProcessoryPage.googlePlayButton.click();
        await browser.newWindow('https://play.google.com/store/apps/details?id=by.onliner.catalog&referrer=utm_source%3Donliner%26utm_medium%3Dbanner%26utm_campaign%3Dcatalog-section%26anid%3Dadmob')
        await browser.switchWindow('https://play.google.com/store/apps/details?id=by.onliner.catalog&referrer=utm_source%3Donliner%26utm_medium%3Dbanner%26utm_campaign%3Dcatalog-section%26anid%3Dadmob')
        await expect(ProcessoryPage.googlePlayLogo).toBeDisplayed();
    });
})