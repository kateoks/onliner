const onlinerCleverPage = require('../pageobjects/onlinerclever.page');

describe('Onliner clever', () => {
    beforeEach(async () => { 
        await onlinerCleverPage.open();
    });
    
    it('should verify the title', async () => {
        await expect(onlinerCleverPage.navigationClover).toHaveTextContaining('Onlíner');
    });

    it('should verify the link of element', async () => {
        await expect(onlinerCleverPage.navigationClover).toHaveLinkContaining('onliner');
    });

    it('should have an attribute class with value', async () => {
        await expect(onlinerCleverPage.navigationClover).toHaveAttribute('class', 'b-top-navigation-clover');
    });

    it('verify if the element is clickable', async () => {
        await expect(onlinerCleverPage.navigationClover).toBeClickable();
    })
});