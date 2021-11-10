const Page = require("./page");

class ComparePage extends Page {
  get compareBtn() {
    return $(
      '//div[@class="compare-button__state compare-button__state_initial"]/a[@class="compare-button__sub compare-button__sub_main"]'
    );
  }

  get checkboxForCompare() {
    return $$('//div[@class="schema-product__compare"]');
  }

  get labelWitchCompare() {
    return $(
      "//div[@class='catalog-content js-scrolling-area']//span[contains(text(), 'товара')]"
    );
  }

  get listProductFromComparePage() {
    return $$(
      "//th[@class='product-table__cell']//span[@class='product-summary__caption']"
    );
  }

  get deleteFromCompareBtn() {
    return $$("//*[@id='product-table']//a[@title='Удалить']");
  }

  get deleteAllProductFromCompare() {
    return $("div.catalog-masthead__aside");
  }

  async selectForCompare() {
    await this.checkboxForCompare[0].click();
    await this.checkboxForCompare[1].click();
    const labelText = await this.labelWitchCompare.getText();

    return await labelText.split(" ").includes("2");
  }

  async validateDeleteProductCorrectly() {
    const arrayProductBeforeDelete = await this.listProductFromComparePage.map(
      async (product) => (product = await product.getText())
    ).length;
    await this.deleteFromCompareBtn[0].click();
    const arrayProductAfterDelete = await this.listProductFromComparePage.map(
      async (product) => (product = await product.getText())
    ).length;

    return (await arrayProductAfterDelete) - arrayProductBeforeDelete === -1
      ? true
      : false;
  }
}

module.exports = new ComparePage();
