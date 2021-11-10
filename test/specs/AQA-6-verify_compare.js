const CatalogPage = require("../pageobjects/filter-page");
const ComparePage = require("../pageobjects/compare.page");

const categoryName = "Вафельницы";
const brandToFilter = "Вафельница";

describe("Verify compare", () => {
  it("should redirect to /waffle and contain not empty array", async () => {
    await CatalogPage.open();
    await CatalogPage.searchForItem(categoryName);
    await CatalogPage.clickCategoryButton(categoryName);
    await expect(browser).toHaveUrlContaining("waffle");
    await expect(
      CatalogPage.validateProductsLoadedCorrectly(brandToFilter)
    ).toBeTruthy();
  });

  it('2 checkboxes should be checked and should be open modal-window "2 товар в сравнении"', async () => {
    await expect(await ComparePage.selectForCompare()).toBeTruthy();
  });

  it("should redirect to page /compare", async () => {
    await ComparePage.compareBtn.click();
    await expect(browser).toHaveUrlContaining("compare");
  });

  it("this product should be delete from array to compare", async () => {
    await expect(ComparePage.validateDeleteProductCorrectly()).toBeTruthy();
  });

  it("should redirect to home-page https://catalog.onliner.by/", async () => {
    await ComparePage.deleteAllProductFromCompare.click();
    await expect(browser).toHaveUrl("https://catalog.onliner.by/");
  });
});
