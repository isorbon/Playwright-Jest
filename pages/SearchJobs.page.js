const BasePage = require('./Base.page');

class SearchJobsPage extends BasePage {
    constructor(page){
        super(page);

        // locators
        this.searchBarLocator = '//*[@id="job-search-hero-bar"]'; // define the xpath, css seletor or any other type of locator that locates the searchBarLocator
        this.searchButtonLocator = '//button[@data-analytics-link-name="search"]'; // define the xpath, css seletor or any other type of locator that locates the searchButtonLocator
        this.filterResultsButtonLocator = '//button[@data-analytics-link-name="filter results"]'; // define the xpath, css seletor or any other type of locator that locates the filterResultsButtonLocator
        this.cityDropDownLocator = '//div[@data-analytics-link-name="city-expand"]'; // define the xpath, css seletor or any other type of locator that locates the cityDropDownLocator
        this.luganoCheckBoxLocator = '//span[@aria-label="Lugano 4 of 5"]'; // define the xpath, css seletor or any other type of locator that locates the luganoCheckBoxLocator
        this.updateButtonLocator = '//a[@data-analytics-link-name="update"]'; // define the xpath, css seletor or any other type of locator that locates the updateButtonLocator
        this.luganoTagLocator = '//div[text()="lugano"]'; // define the xpath, css seletor or any other type of locator that locates the luganoTagLocator
        this.jobsListingLocator = '.job-card-wrapper a'; // define the xpath, css seletor or any other type of locator that locates the jobsListingLocator
    }

    async navigate(){
        await super.navigate('/careers/jobsearch');
    }

    async searchJob(jobKeyword){
        // Fill the search input field with 'Test Automation' and clicl on the 'Search' button
        await this.page.fill(this.searchBarLocator, jobKeyword);
        await this.page.click(this.searchButtonLocator);
    }

    async filterByCity(){
        // Click on the 'Filter results' button, open the 'City' dropdown, check the 'Lugano' checkbob and click on the 'Update' button
        await this.page.click(this.filterResultsButtonLocator);
        await this.page.click(this.cityDropDownLocator);
        await this.page.click(this.luganoCheckBoxLocator);
        await this.page.click(this.updateButtonLocator);
    }

    async getLuganoTagTextContent(){
        // Return the text content of the 'Lugano' tag
        let tagLugano = await this.page.$(this.luganoTagLocator);
        return await tagLugano.innerText();
    }

    async openJobDescription(n){
        // Find the elements corresponding to the list of job positions and click on the n-th one
        await this.page.locator(this.jobsListingLocator).nth(n).click();
    }
}

module.exports = SearchJobsPage;