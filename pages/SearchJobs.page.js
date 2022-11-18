const BasePage = require('./Base.page');

class SearchJobsPage extends BasePage {
    constructor(page){
        super(page);

        // locators
        this.searchBarLocator; // define the xpath, css seletor or any other type of locator that locates the searchBarLocator
        this.searchButtonLocator; // define the xpath, css seletor or any other type of locator that locates the searchButtonLocator
        this.filterResultsButtonLocator; // define the xpath, css seletor or any other type of locator that locates the filterResultsButtonLocator
        this.cityDropDownLocator; // define the xpath, css seletor or any other type of locator that locates the cityDropDownLocator
        this.luganoCheckBoxLocator; // define the xpath, css seletor or any other type of locator that locates the luganoCheckBoxLocator
        this.updateButtonLocator; // define the xpath, css seletor or any other type of locator that locates the updateButtonLocator
        this.luganoTagLocator; // define the xpath, css seletor or any other type of locator that locates the luganoTagLocator
        this.jobsListingLocator; // define the xpath, css seletor or any other type of locator that locates the jobsListingLocator
    }

    async navigate(){
        await super.navigate('/careers/jobsearch');
    }

    async searchJob(jobKeyword){
        // Fill the search input field with 'Test Automation' and clicl on the 'Search' button
    }

    async filterByCity(){
        // Click on the 'Filter results' button, open the 'City' dropdown, check the 'Lugano' checkbob and click on the 'Update' button
    }

    async getLuganoTagTextContent(){
        // Return the text content of the 'Lugano' tag
    }

    async openJobDescription(n){
        // Find the elements corresponding to the list of job positions and click on the n-th one
    }
}

module.exports = SearchJobsPage;