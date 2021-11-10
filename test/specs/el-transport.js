const TransportPage = require('../pageobjects/el-transport.page');
const CatalogPage = require("../pageobjects/filter-page");

const navigationName = "1";
const transportGoodName = "Электрический транспорт";
const groupProducts = "Электровелосипеды";

const filterByProducer = "Производитель";
const brandToFilter = ["Xiaomi"];

const filterByPowerSupply = "Класс";
const powerSupplyToFilter = "горный";

describe('Electronic transport', () => {
    it("should open array of products (not empty)", async () => {
        await TransportPage.open();
        await TransportPage.selectCatalog(navigationName);
        await TransportPage.selectGardenGoodsLink(transportGoodName);
        await TransportPage.selectGroupProducts(groupProducts);
    
        await expect(TransportPage.validateProductsLoadedCorrectly()).toBeTruthy();
    });
    
    it('Array schould be filterd and quantity products on page and on label "Найдено {quantity} товаров" should be equal', async () => {
        await CatalogPage.markCheckbox(filterByProducer, brandToFilter[0]);
        // await browser.pause(5000);
        await expect(CatalogPage.validateProductsLoadedCorrectly(brandToFilter[0])).toBeTruthy();
    });

    it('should redirect to the cart', async () => {
        await TransportPage.buttonAmountOffers.click(); 
        await TransportPage.buttonBuyNow.click();
        await expect(TransportPage.cartPage).toBeDisplayed();
    });
});