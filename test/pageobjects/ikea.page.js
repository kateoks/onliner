const Page = require("./page");

class IkeaPage extends Page {
  getKitchenGoodsLink(kitchenGoodName) {
    return `//*[@data-id="brand-6"]//div[@class="catalog-navigation-list__aside-list"]//div[contains(text(), "${kitchenGoodName}")]`;
  }

  get inputAmountProduct() {
    return $(
      '//span[@class="schema-filter-button__sub schema-filter-button__sub_main"]'
    );
  }

  get selectOrder() {
    return $("//div[@id='schema-order']");
  }

  get listOfDiaplayedProductsPrices() {
    return $$(
      `//div[@class="schema-product__price"]//span[contains(text(), "р")]`
    );
  }

  getSortValue(sortValueName) {
    return `//span[contains(text(), "${sortValueName}")]`;
  }

  async selectKitchenGoodsLink(kitchenGoodName) {
    const goodsName = await $(this.getKitchenGoodsLink(kitchenGoodName));
    await goodsName.click();
  }

  async selectSortValue(sortValueName) {
    const sortValue = await $(this.getSortValue(sortValueName));
    await sortValue.click();
  }

  async getPrices() {
    const arrayProductsPrices = await this.listOfDiaplayedProductsPrices.map(
      async (product) =>
        Number((await product.getText()).replace(" р.", "").replace(",", "."))
    );
    return await arrayProductsPrices;
  }

  async validateExpenciveCorrectly(pricesBefore, pricesAfter) {
   return await pricesBefore.sort((a, b) => b - a).join("") ===
      pricesAfter.join("");
  }
}

module.exports = new IkeaPage();
