import{When, Then, Given} from '@cucumber/cucumber';
import { PageManager } from '../../pages/pageManager';
import { chromium, Browser, expect, Page } from '@playwright/test';
import { testData } from '../../test_data/spotTheBugFormTestData.json';
import config from '../../support/config.json';
import { assert } from 'console';
// Get base URL from config
const baseUrl: string = config.environments.qa.baseUrl;
let pageManager: PageManager;
let browser: Browser;
let page: Page;

 Given('I am on the form page', async function () {
           browser = await chromium.launch({ headless: false });
           page = await browser.newPage();
           pageManager = new PageManager(page);
           await pageManager.formHome().navigateToUrl(baseUrl);
           await pageManager.formHome().validateFormHomePageLoaded();
         });
When('I fill in the fields with {string}, {string}, {string}, {string}, {string}, {string}, {string}', async function (firstName, lastName, phoneNumber, country, emailAddress, password, agreeToTerms ){
          await pageManager.formHome().fillForm(
                    firstName, 
                    lastName, 
                    phoneNumber, 
                    country, 
                    emailAddress, 
                    password, 
                    agreeToTerms
                );
               
         });

Then('I should see a success message on the page {string}, {string}, {string}, {string}, {string}, {string}, {string}', async function (firstName, lastName, phoneNumber, country, emailAddress, password, condition) {
          // Validate the success message after form submission
                await pageManager.formHome().validateSuccessMassage(
                    condition,
                    firstName,
                    lastName,
                    phoneNumber,
                    country,
                    emailAddress,
                    password
                );
         });