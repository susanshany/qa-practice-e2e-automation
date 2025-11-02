import {test} from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import config from '../support/config.json';
import{testData}from '../test_data/spotTheBugFormTestData.json';
const baseUrl: string = config.environments.qa.baseUrl;
test.describe('Form Validation Tests', () => {
let pageManager: PageManager;
  test.beforeEach(async ({page}) => {
    await page.goto(baseUrl);
    pageManager = new PageManager(page);
  });

    test('Validate form page loaded', async ({page}) => {
 
        await pageManager.formHome().validateFormHomePageLoaded();
    });

    testData.forEach(data => {
    test(`Validate spot the bug form ${data.condition}`, async({page})=> {
                await pageManager.formHome().fillForm(
                    data.firstName, 
                    data.lastName, 
                    data.phoneNumber, 
                    data.country, 
                    data.emailAddress, 
                    data.password, 
                    data.agreeToTerms
                );
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