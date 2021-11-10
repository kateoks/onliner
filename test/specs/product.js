const ProductPage = require("../pageobjects/product.page");

const productName = "Ноутбук Lenovo IdeaPad 3 15ALC6 82KU00B3RK";

describe("ProductPage", () => {
  it("should open product-page", async () => {
    await ProductPage.open();
    await ProductPage.openProduct(productName);
    await expect(ProductPage.productDetails).toBeDisplayed();
  });

  it("should open authorization page - redirect to https://profile.onliner.by/", async () => {
    await ProductPage.leaveFeedbackBtn.click();
    await expect(ProductPage.authForm).toBeDisplayed();
  });

  it('should be checkbox -checked, open modal-window "1 товар в сравнении,button "Очистить список сравнения", open authorization page (p.3-5 tests)', async () => {
    await ProductPage.open();
    await ProductPage.openProduct(productName);
    await ProductPage.checkboxCompare.click();
    await expect(ProductPage.compareBtn).toBeDisplayed();

    await ProductPage.deleteBtn.click();
    await expect(ProductPage.deleteMessage).toBeDisplayed();

    await ProductPage.toBookmarkBtn.click();
    await expect(ProductPage.authForm).toBeDisplayed();
  });
});
