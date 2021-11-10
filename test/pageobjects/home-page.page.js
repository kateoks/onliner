const Page = require('./page');

class HomePage extends Page {
    
    get buttonSignIn () { 
        return $('div[class *= "auth-bar__item auth-bar__item--text"]');
    };
    get formForSingIn () { 
        return $('div[class *= "auth-entry"]');
    };
    get buttonFacebook () {
        return $('div[title *= "Facebook"]');
    };
    get logInFacebook () {
        return $('div[class = "_4-u2 _1w1t _4-u8 _52jv"]');
    };
    get buttonVk () {
        return $('div[title *= "ВКонтакте"]');
    };
    get logInVk () {
        return $('div[class ="oauth_content box_body clear_fix"]');
    };
    get buttonGoogle () {
        return $('div[title *= "Google"]');
    };
    get logInGoogle () {
        return $('div[jsname = "f2d3ae"]');
    };
    get buttonCart () {
        return $('a[title *= "Корзина"]');
    };
    get pageCart () {
        return $('div[class = "cart-message__content"]');
    };
    get labelAllBestPrices () {
        return $('a[class ="catalog-navigation__bubble catalog-navigation__bubble_primary"]');
    };
    get superPrice () {
        return $('div[id="super-prices-slider"]');
    };
    get titleCatalog () {
        return $('h1[class ="catalog-navigation__title"]');
    };

    async open () {
        await super.open(`/`);
    };
}

module.exports = new HomePage();