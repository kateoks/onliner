const HomePage = require('../pageobjects/home-page.page');

describe('Home page', () => {
    beforeEach(async () => {
        await HomePage.open();
    })

    it('should open form sign in', async () => {
        await HomePage.buttonSignIn.click();
        await expect(HomePage.formForSingIn).toBeDisplayed();
    });

    it('should open new window and redirect to login page facebook', async () => {
        await HomePage.buttonFacebook.click();
        await browser.newWindow('https://www.facebook.com/login.php?skip_api_login=1&api_key=837293952989787&kid_directed_site=0&app_id=837293952989787&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.0%2Fdialog%2Foauth%3Fclient_id%3D837293952989787%26redirect_uri%3Dhttps%253A%252F%252Fgc.onliner.by%252Fviews%252Fsocial-auth.html%26scope%3Demail%26response_type%3Dcode%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D25de9008-eb1d-4cff-9bb2-47eae2f2be6e%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fgc.onliner.by%2Fviews%2Fsocial-auth.html%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%23_%3D_&display=page&locale=ru_RU&pl_dbl=0')
        await browser.switchWindow('https://www.facebook.com/login.php?skip_api_login=1&api_key=837293952989787&kid_directed_site=0&app_id=837293952989787&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.0%2Fdialog%2Foauth%3Fclient_id%3D837293952989787%26redirect_uri%3Dhttps%253A%252F%252Fgc.onliner.by%252Fviews%252Fsocial-auth.html%26scope%3Demail%26response_type%3Dcode%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D25de9008-eb1d-4cff-9bb2-47eae2f2be6e%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fgc.onliner.by%2Fviews%2Fsocial-auth.html%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%23_%3D_&display=page&locale=ru_RU&pl_dbl=0')
        await expect(HomePage.logInFacebook).toBeDisplayed();
    });

    it('should open new window and redirect to login page вконтакте', async () => {
        await HomePage.buttonVk.click();
        await browser.newWindow('https://oauth.vk.com/authorize?client_id=4589307&redirect_uri=https%3A%2F%2Fgc.onliner.by%2Fviews%2Fsocial-auth.html&scope=email&response_type=code');
        await browser.switchWindow('https://oauth.vk.com/authorize?client_id=4589307&redirect_uri=https%3A%2F%2Fgc.onliner.by%2Fviews%2Fsocial-auth.html&scope=email&response_type=code');
        await expect(HomePage.logInVk).toBeDisplayed();
    });

    it('should open new window and redirect to login page google', async () => {
        await HomePage.buttonGoogle.click();
        await browser.newWindow('https://accounts.google.com/');
        await browser.switchWindow('https://accounts.google.com/');
        await expect(HomePage.logInGoogle).toBeDisplayed();
    });

    it('should open new window and should redirect to cart page', async () => {
        await HomePage.buttonCart.click();
        await browser.newWindow('https://cart.onliner.by/');
        await browser.switchWindow('https://cart.onliner.by/');
        await expect(HomePage.pageCart).toBeDisplayed();
    });

    it('should redirect to superprice', async () => {
        await HomePage.labelAllBestPrices.click();
        await expect(HomePage.superPrice).toBeDisplayed();
    });

    it('should contain title "Каталог"', async () => {
        await expect(HomePage.titleCatalog).toHaveTitleContaining('Каталог');
    });
});