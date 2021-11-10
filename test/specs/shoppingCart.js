const ShoppingCartPage = require('../pageobjects/shopingCart.page');

describe('Shopping Cart', () => {
    it('should verify text on the label', async () => {
        await ShoppingCartPage.open();
        await browser.newWindow('https://catalog.onliner.by/medicalmask');
        await browser.switchWindow('https://catalog.onliner.by/medicalmask');
        await ShoppingCartPage.firstProduct.click();
        await ShoppingCartPage.buttonCard.click();
        await expect(ShoppingCartPage.cartLabel).toHaveText('1');
    });

    it('should open "Корзина"', async () => {
        await ShoppingCartPage.buttonShoppingCard.click();
        await expect(ShoppingCartPage.productInCard).toBeDisplayed();
    });

    it('should open url in new window and verify a price', async () => {
        await browser.newWindow('https://catalog.onliner.by/medicalmask/vizardm/m31');
        await browser.switchWindow('https://catalog.onliner.by/medicalmask/vizardm/m31');
        await expect(ShoppingCartPage.priceOfProduct).toBeDisplayed();
    });

    it('should verify value of cart', async () => {
        await browser.switchWindow('https://cart.onliner.by/');
        await ShoppingCartPage.buttonPlus.click();
        await ShoppingCartPage.counterOfProducts.getValue();
        await expect(ShoppingCartPage.counterOfProducts).toHaveValue('2');
    });

    it('should open page for registration', async () => {
        await ShoppingCartPage.buttonForRegistration.click();
        await expect(ShoppingCartPage.dataRegistration).toBeDisplayed();
    });
});