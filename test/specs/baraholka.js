const BaraholkaPage = require('../pageobjects/baraholka.page');

describe('Baraholka', () => {
    beforeEach(async () => {
        await BaraholkaPage.open();
    })

    it('should verify the title', async () => {
        await expect(BaraholkaPage.pageTitle).toHaveText('Барахолка');
    });

    it('should have an id', async () => {
        await expect(BaraholkaPage.inputInBaraholka).toHaveId('fleaMarketSearchInput');
    });

    it('should have a value', async () => {
        await expect(BaraholkaPage.inputInBaraholka).toHaveValue('Поиск на Барахолке по всей Беларуси');
    });

    it('should have a link', async () => {
        await expect(BaraholkaPage.buttonInBaraholka).toHaveLink('/fleamarketposting.php');
        await BaraholkaPage.buttonInBaraholka.moveTo();
    });
});