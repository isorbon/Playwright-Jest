const { chromium } = require('playwright');
const HomePage = require('../pages/Home.page');
const SearchJobsPage = require('../pages/SearchJobs.page');
const JobDescriptionPage = require('../pages/JobDescription.page');

describe('Search for Test Automation job in Lugano', () => {
jest.setTimeout(30000);
let browser = null;
let context = null;
let page = null;
let homePage = null;
let searchJobsPage = null;
let jobDescriptionPage = null;

beforeAll( async ()=>{
    browser = await chromium.launch({ headless: false, slowMo: 1000 });
    context = await browser.newContext();
    page = await context.newPage();
    homePage = new HomePage(page);
    searchJobsPage = new SearchJobsPage(page);
    jobDescriptionPage = new JobDescriptionPage(page);
    await homePage.navigate();
});

afterAll( async ()=>{
    await context.close();
    await browser.close();
});

it('Should be able to open the "Search jobs" page', async() => {
    //1. Complete the 'openSearchAndApply()' method in 'HomePage' class and use it to open the 'Search jobs' page
});

it('Should search for Test Automation jobs in Lugano', async() => {
    //2. Complete the 'searchJob()' method in 'SearchJobsPage' class and use it to search for 'Test Automation' jobs
    //   Complete the 'filterByCity()' method in 'SearchJobsPage' class and use it to insert the city filter
    //   Complete the 'getLuganoTagTextContent()' method in 'SearchJobsPage' class and use it to get the text of the 'Lugano' tag
    //   Assert on the Lugano tag to contain the correct text
    //   Complete the 'openJobDescription()' method in 'SearchJobsPage' class and use it to open the first job description in the list
});

it('Should verify that the job position is open in Lugano', async() => {
    //3. Complete the 'getLocations()' method in 'JobDescriptionPage' class and use it to get the text telling in which locations the job position is open
    //   Assert that the locations text contains 'Lugano'
});
});