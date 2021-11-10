const CatalogPage = require("../pageobjects/filter-page");

const categoryName = "Умные часы";
const filterByProducer = "Производитель";
const filterByMaterial = "Материал корпуса";
const filterBySimcard = "С SIM-картой";
const brandToFilter = ["Apple", "Samsung"];
const materialToFilter = "резина";
const simcardToFilter = "micro-SIM";

describe("Verify filter component", () => {
  it('should redirect to /smartwatch and should filter products correctly"', async () => {
    await CatalogPage.open();
    await CatalogPage.searchForItem(categoryName);
    await CatalogPage.clickCategoryButton(categoryName);
    await CatalogPage.markCheckbox(filterByProducer, brandToFilter[0]);
    await expect(
      CatalogPage.validateProductsLoadedCorrectly(brandToFilter[0])
    ).toBeTruthy();
  });

  it("should contain empty array", async () => {
    await CatalogPage.markCheckbox(filterByMaterial, materialToFilter);
    await expect(CatalogPage.messageAfterFilter).toBeDisplayed();
  });

  it("should contain empty array", async () => {
    await CatalogPage.markCheckbox(filterByProducer, brandToFilter[0]);
    await CatalogPage.markCheckbox(filterByProducer, brandToFilter[1]);
    await CatalogPage.markCheckbox(filterBySimcard, simcardToFilter);
    await expect(CatalogPage.messageAfterFilter).toBeDisplayed();
  });
});
