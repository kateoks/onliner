const Page = require('./page');

class ProcessoryPage extends Page {
    
    get processoryInCatalog () { 
        return $('//div[contains(@id, "widget-4-8")] // a[contains(@href, "https://catalog.onliner.by/cpu?utm_source=catalog_tile&utm_medium=cpu")]'); 
    };
    get titleOfProcessoryPage () { 
        return $('h1[class="schema-header__title"]'); 
    };
    get choiceOfBuyers () { 
        return $$('//div[contains(@class, "popover-style__handle schema-product__popover-handle schema-product__popover-handle_ticket js-popover-container")] // div[contains(text(), "Выбор покупателей")]')[0]; 
    };
    get messageFromChoiceOfBuyers () { 
        return $('//div[contains(@class, "popover-style popover-style_primary popover-style_base popover-style_bottom-left popover-style_noarrow schema-product__popover schema-product__popover_ticket popover-style_visible")] // div[contains(text(), "Товар входит в топ-3 по заказам покупателей в разделе")]'); 
    };
    get labelAds () { 
        return $('//label[contains(@class, "schema-filter-control schema-filter-control_switcher")] // span[contains(text(), "Объявления")]'); 
    };
    get buttonAds () { 
        return $('a[class="button button_green button_base schema-header__button"]'); 
    };
    get pageSihnIn () { 
        return $('div[class="auth-form__title auth-form__title_big auth-form__title_condensed-default"]'); 
    };
    get googlePlayButton () { 
        return $('a[class="schema-filter__store-item schema-filter__store-item_google"]'); 
    };
    get googlePlayLogo () { 
        return $('a[title="Google Play Logo"]'); 
    };

    async open () {
        await super.open('/');
    };
}

module.exports = new ProcessoryPage();