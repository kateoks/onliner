const Page = require("./page");

class FurniturePage extends Page {
  getSwitcherBtn(switchTo) {
    return `//div[@id='schema-segments']//span[contains(text(), '${switchTo}')]`;
  }

  catalogNavigation(navigationName) {
    return `//li[@class='catalog-navigation-classifier__item ']//span[contains(text(), "${navigationName}")]`;
  }

  getFurnitureLink(furnitureName) {
    return `//div[contains(text(), "${furnitureName}")]`;
  }

  getGroupProducts(groupProductsName) {
    return `//*[@data-id="5"]//div[@class="catalog-navigation-list__dropdown-list"]//following-sibling::a//span[contains(text(),"${groupProductsName}")]`;
  }

  async selectCatalog(navigationName) {
    const catalogName = await $(this.catalogNavigation(navigationName));
    await catalogName.click();
  }

  async selectFurnitureLink(furnitureName) {
    const goodsName = await $(this.getFurnitureLink(furnitureName));
    await goodsName.click();
  }

  async selectGroupProducts(groupProductsName) {
    const groupProducts = await $(this.getGroupProducts(groupProductsName));
    await groupProducts.click();
  }

  async switchFn(switchTo) {
    const switchBtn = await $(this.getSwitcherBtn(switchTo));
    switchBtn.click();
  }
}

module.exports = new FurniturePage();
