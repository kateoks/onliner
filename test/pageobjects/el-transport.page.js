const Page = require('./page');

class TransportPage extends Page {
    catalogNavigation(navigationName) {
        return `li[data-id="${navigationName}"`;
    }
    
    getGardenGoodsLink(transportGoodName) {
         return `//div[@class="catalog-navigation-list__aside-item"]//div[contains(text(), "${transportGoodName}")]`;
    }
    
    getGroupProducts(groupProductsName) {
        return `//div[@class="catalog-navigation-list__aside-item catalog-navigation-list__aside-item_active"]//following-sibling::div//span[contains(text(), "${groupProductsName}")]`
    }
    
    get listOfDiaplayedProducts() {
        return $$(`div[class="schema-product__group"]`);
    }

    get buttonAmountOffers() {
        return $$(`//div[contains(@class, 'schema-product__offers')] // a[contains(@class, 'schema-product__button button button_orange')]`)[0];
    }

    get buttonBuyNow() {
        return $$(`div.helpers_hide_tablet a[href*="https://cart.onliner.by"]`)[0];
    }

    get cartPage() {
        return $(`div[class="cart-form__title cart-form__title_big-alter cart-form__title_extended-alter"]`);
    }

    async open() {
        await super.open(`/`);
    }
    
    async selectCatalog(navigationName) {
        const catalogName = await $(this.catalogNavigation(navigationName));
        await catalogName.click();   
    }
    
    async selectGardenGoodsLink(transportGoodName){
        const goodsName = await $(this.getGardenGoodsLink(transportGoodName));
        await goodsName.click();
    }
    
    async selectGroupProducts(groupProductsName){
        const groupProducts = await $(this.getGroupProducts(groupProductsName));
        await groupProducts.click();
    }
    
    async validateProductsLoadedCorrectly() {
        return (
          (await this.listOfDiaplayedProducts.map(
            async (product) => await product.getText()
          ).length) > 0
        );
    }
}

module.exports = new TransportPage();