const VacuumClenearsPage = require("../pageobjects/vacuum_cleaners");
const CatalogPage = require("../pageobjects/filter-page");

const navigationName = "Дачный сезон";
const gardenGoodName = "Садовая техника";
const groupProducts = "Хозяйственные пылесосы";

const filterByProducer = "Производитель";
const brandToFilter = ["Bosch", "Karcher"];

const filterByPowerSupply = "Питание";
const powerSupplyToFilter = "USB";

describe("AQA-10 Verify пылесосы", () => {
  it("should open array of products (not empty)", async () => {
    await VacuumClenearsPage.open();
    await VacuumClenearsPage.selectCatalog(navigationName);
    await VacuumClenearsPage.selectGardenGoodsLink(gardenGoodName);
    await VacuumClenearsPage.selectGroupProducts(groupProducts);

   await expect(VacuumClenearsPage.validateProductsLoadedCorrectly()).toBeTruthy();
  });

  it('Array schould be filterd and quantity products on page and on label "Найдено {quantity} товаров" should be equal', async () => {
    await CatalogPage.markCheckbox(filterByProducer, brandToFilter[0]);
    await browser.pause(5000);

    await expect(
      CatalogPage.validateProductsLoadedCorrectly(brandToFilter[0])
    ).toBeTruthy();

    await expect(
      VacuumClenearsPage.validateAmountProductsLoadedCorrectly()
    ).toBeTruthy();
  });

  it("should open empty array ", async () => {
    await CatalogPage.markCheckbox(filterByProducer, brandToFilter[1]);
    await CatalogPage.markCheckbox(filterByPowerSupply, powerSupplyToFilter);
    await expect(await CatalogPage.messageAfterFilter).toBeDisplayed();
  });
});
