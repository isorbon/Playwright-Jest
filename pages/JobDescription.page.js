const BasePage = require('./Base.page');

class JobDescriptionPage extends BasePage {
    constructor(page){
        super(page);

        // locators
        this.locationsTextLocator = '#job-location.location'; // define the xpath, css seletor or any other type of locator that locates the locationsTextLocator
    }

    async getLocations(){
        // Return the text content of the 'Locations' text field
        const textLocation = await this.page.$(this.locationsTextLocator);
        return await textLocation.innerText();
     }
}

module.exports = JobDescriptionPage;