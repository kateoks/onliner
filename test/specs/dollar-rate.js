const dollarRatePage = require('../pageobjects/dollar-rate.page');

describe('Dollar rate', () => {
    it('should verify is the dollar rate displayed', async () => {
        await dollarRatePage.open();
        await expect(dollarRatePage.currencyAmount).toBeDisplayed();
    });

    it('should verify is the dollar rate is clickable', async () => {
        await expect(dollarRatePage.currencyAmount).toBeClickable();
    });
})