const Page = require('./page');

class ShoppingCartPage extends Page {
    get cartLabel () { 
        return $('div[data-bind = "text: $root.cartQuantity"]');
    };
    get medMasks () {
        return $('a[href="https://catalog.onliner.by/medicalmask?utm_source=catalog_tile&utm_medium=medicalmask"]');
    };
    get firstProduct () { 
        return $('//div[contains(@class, "schema-product__title")] // span[contains(text(), "Респиратор-полумаска VizardM Многоразовая маска со сменными фильтрами M3.1 (черный)")]');
    };
    get buttonCard () { 
        return $('//div[contains(@class, "product-aside__box")] // a[contains(text(), "В корзину")]');
    };
    get buttonShoppingCard () { 
        return $('a[class = "auth-bar__item auth-bar__item--cart"]');
    };
    get productInCard () { 
        return $('div[class = "cart-form__offers-unit cart-form__offers-unit_primary"]');
    };
    get priceOfProduct () { 
        return $('a[class="offers-description__link offers-description__link_nodecor"]');
    };
    get buttonForRegistration () { 
        return $('a[class="button-style button-style_small cart-form__button button-style_primary"]');
    };
    get dataRegistration () { 
        return $('div[class="cart-form__title cart-form__title_big-alter cart-form__title_extended-alter"]');
    };
    get buttonPlus () { 
        return $('a[class="button-style button-style_auxiliary button-style_small cart-form__button cart-form__button_increment helpers_hide_tablet"]');
    };
    get counterOfProducts () { 
        return $('input[class="input-style input-style_primary input-style_small input-style_text_center cart-form__input cart-form__input_max-width_xxxxsssss cart-form__input_nonadaptive"]');
    };

    async open () {
        await super.open('https://catalog.onliner.by/medicalmask?utm_source=catalog_tile&utm_medium=medicalmask');
    };
}
module.exports = new ShoppingCartPage();