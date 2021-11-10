const Page = require("./page");

class ProductPage extends Page {
  getproductNameLocator(productName) {
    return `//a//span[contains(text(), '${productName}')]`;
  }

  get checkboxCompare() {
    return $("span.helpers_hide_tablet");
  }

  get leaveFeedbackBtn() {
    return $(
      '//div[@class="offers-description__reviews"]/a[contains(text(), "Оставить отзыв")]'
    );
  }
  get compareBtn() {
    return $(
      '//div[@class="compare-button__state compare-button__state_initial"]/a[@class="compare-button__sub compare-button__sub_main"]'
    );
  }

  get deleteMessage() {
    return $("div.compare-button__state_hidden");
  }

  get deleteBtn() {
    return $("span.compare-button__icon_trash");
  }
  get toBookmarkBtn() {
    return $(
      '//label[@class="catalog-masthead-controls__label"]//span[text()="В закладки"]'
    );
  }

  get authForm() {
    return $("div.auth-entry");
  }

  get productDetails() {
    return $("main.product-main");
  }

  async open() {
    await browser.url("https://catalog.onliner.by/notebook");
  }

  async openProduct(productName) {
    const productNameLocator = await $(this.getproductNameLocator(productName));
    await productNameLocator.click();
  }
}

module.exports = new ProductPage();
