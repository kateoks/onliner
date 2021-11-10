const Page = require("./page");

class CatalogPage extends Page {
  // Frames
  get searchFrame() {
    return $("iframe.modal-iframe");
  }

  // Inputs
  get searchInput() {
    return $("input.fast-search__input");
  }

  // Elements
  get listOfDiaplayedProducts() {
    return $$(`span[data-bind *='product.extended_name']`);
  }

  get loadingBar() {
    return $("div.schema-filter-button__state_animated");
  }

  get messageAfterFilter() {
    return $("div.schema-products__message");
  }

  // Actions
  async open() {
    await super.open(`/`);
  }

  async searchForItem(itemName) {
    // await this.searchInput.waitForDisplayed();
    await this.searchInput.setValue(itemName);
  }

  async clickCategoryButton(categoryName) {
    await browser.switchToFrame(await this.searchFrame);
    const categoryButton = await $(`*=${categoryName}`);
    // await categoryButton.waitForClickable();
    await categoryButton.click();
  }
  getCheckboxLocator(filterBy, checkboxValue) {
    return `//span[text() = '${filterBy}']/../following-sibling::div//span[text() = '${checkboxValue}']/parent::label`;
  }

  async markCheckbox(filterBy, checkboxValue) {
    const checkBox = await $(this.getCheckboxLocator(filterBy, checkboxValue));
    await checkBox.waitForClickable();
    await checkBox.click();   
  }

  async validateProductsLoadedCorrectly(productsBrand) {
    return await this.listOfDiaplayedProducts
      .map(async (product) => await product.getText())
      .every(async (productText) => await productText.includes(productsBrand));
  }
}

module.exports = new CatalogPage();
