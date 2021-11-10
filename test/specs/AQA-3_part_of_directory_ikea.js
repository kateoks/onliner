const IkeaPage = require("../pageobjects/ikea.page");
const VacuumClenearsPage = require("../pageobjects/vacuum_cleaners");

const navigationName = "IKEA";
const kitchenGoodName = "Кухонная утварь";
const groupProducts = "Разделочные доски";

const sortValueName = "Дорогие";

describe("Verify part of directory (ikea)", () => {
  it("should contain a label, rray of products (steps 1-3 from test) ", async () => {
    await VacuumClenearsPage.open();
    await VacuumClenearsPage.selectCatalog(navigationName);
    await IkeaPage.selectKitchenGoodsLink(kitchenGoodName);
    await VacuumClenearsPage.selectGroupProducts(groupProducts);

    await expect(IkeaPage.inputAmountProduct).toBeDisplayed();
    await expect(
      VacuumClenearsPage.validateAmountProductsLoadedCorrectly()
    ).toBeTruthy();
  });

  it("should sort array of products by price from cheap to expensive product", async () => {
    const pricesBefore = await IkeaPage.getPrices();

    await IkeaPage.selectOrder.click();
    await IkeaPage.selectSortValue(sortValueName);
    const pricesAfter = await IkeaPage.getPrices();

    await expect(
      IkeaPage.validateExpenciveCorrectly(pricesBefore, pricesAfter)
    ).toBeTruthy();
  });
});
