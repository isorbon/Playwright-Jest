const BasePage = require('./Base.page');

class HomePage extends BasePage {
    constructor(page){
        super(page);

        // locators
        this.careersButtonLocator; // define the xpath, css seletor or any other type of locator that locates the careersButtonLocator
        this.searchAndApplyLinkTextLocator; // define the xpath, css seletor or any other type of locator that locates the searchAndApplyLinkTextLocator
    }

    async navigate(){
        await super.navigate('');
    }

    async openSearchAndApply(){
        // Click on the 'Careers' button and then click on the 'Search and apply' link text that displays
    }
}

module.exports = HomePage;