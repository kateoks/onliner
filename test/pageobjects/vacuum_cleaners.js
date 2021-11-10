const Page = require("./page");



class VacuumClenearsPage extends Page {
  catalogNavigation(navigationName) {
    return `//*[@data-item-id='${navigationName}']`;
  }

  getGardenGoodsLink(gardenGoodName) {
     return `//*[@data-id="brand-7"]//div[@class="catalog-navigation-list__aside-list"]//div[contains(text(), "${gardenGoodName}")]`
    ;
  }

  getGroupProducts(groupProductsName) {
    return `//div[@class="catalog-navigation-list__aside-item catalog-navigation-list__aside-item_active"]//following-sibling::div//span[contains(text(),"${groupProductsName}")]`
    ;
  }

  get listOfDiaplayedProducts() {
    return $$(`span[data-bind *='product.extended_name']`);
  }

  async open() {
    await super.open(`/`);
  }

  async selectCatalog(navigationName) {
    const catalogName = await $(this.catalogNavigation(navigationName));
    await catalogName.click();   
  }

  async selectGardenGoodsLink(gardenGoodName){
    const goodsName = await $(this.getGardenGoodsLink(gardenGoodName));
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

  async validateAmountProductsLoadedCorrectly() {
    const inputAmountProduct = await $('//span[@class="schema-filter-button__sub schema-filter-button__sub_main"]');
    const spanWithAmount = await inputAmountProduct.getText();
    const arrayProductsLength = await this.listOfDiaplayedProducts.map(
      async (product) => await product.getText()
    ).length

    return await spanWithAmount.split(" ").includes(arrayProductsLength.toString());
    
  }

}

module.exports = new VacuumClenearsPage();
