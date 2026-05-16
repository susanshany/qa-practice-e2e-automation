import {test} from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import config from '../support/config.json';
import{testData}from '../test_data/spotTheBugFormTestData.json';
// Get base URL from config
const baseUrl: string = config.environments.qa.baseUrl;
// Define the test suite
test.describe(`Form Validation Tests`, () => {
// Declare PageManager variable
let pageManager: PageManager;
  // Before each test, navigate to the base URL and initialize PageManager
  test.beforeEach(async ({page}) => {
    // Navigate to the base URL
    await page.goto(baseUrl);
    // Initialize PageManager
    pageManager = new PageManager(page);
  });
    // Test to validate that the form page is loaded
    test(`@Regression @Smoke Validate form page loaded`, async ({page}) => {
        // Validate that the form home page is loaded
        await pageManager.formHome().validateFormHomePageLoaded();
    });
    // Iterate over each data set in testData to create parameterized tests
    testData.forEach(data => {
    // Define a test for each data set
    test(`@Web Validate spot the bug form ${data.condition}`, async({page})=> {
                // Fill the form with data from the current data set
                await pageManager.formHome().fillForm(
                    data.firstName, 
                    data.lastName, 
                    data.phoneNumber, 
                    data.country, 
                    data.emailAddress, 
                    data.password, 
                    data.agreeToTerms
                );
                // Validate the success message after form submission
                await pageManager.formHome().validateSuccessMassage(
                    data.conditionType,
                    data.firstName,
                    data.lastName,
                    data.phoneNumber,
                    data.country,
                    data.emailAddress,
                    data.password
                );
            
        });
});


})