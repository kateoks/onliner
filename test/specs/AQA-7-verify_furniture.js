const FurniturePage = require("../pageobjects/furniture.page");
const VacuumClenearsPage = require("../pageobjects/vacuum_cleaners");
const CatalogPage = require("../pageobjects/filter-page");

const navigationName = "Дом";
const furnitureName = "Мебель";
const groupProductsName = "Шкафы";
const switchTo = ["Каталог", "Объявления"];

describe("Verify part of directory (ikea)", () => {
  it("should contain a label, rray of products (steps 1-3 from test) ", async () => {
    await VacuumClenearsPage.open();
    await FurniturePage.selectCatalog(navigationName);
    await FurniturePage.selectFurnitureLink(furnitureName);
    await FurniturePage.selectGroupProducts(groupProductsName);
    await expect(browser).toHaveUrlContaining("wardrobes");
  });

  it("should be open empty array and message", async () => {
    await FurniturePage.switchFn(switchTo[1]);
    await expect(await CatalogPage.messageAfterFilter).toBeDisplayed();
  });

  it("should be open array of products", async () => {
    await FurniturePage.switchFn(switchTo[0]);
    await expect(await CatalogPage.messageAfterFilter).not.toBeDisplayed();
  });
});
