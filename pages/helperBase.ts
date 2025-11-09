import { Locator,expect, Page } from '@playwright/test';
export class HelperBase {
    readonly page: Page;
    // Initialize the page object in the constructor
    constructor(page: Page) {
        // Assign the passed page to the class property
        this.page = page;
    }
    // Method to validate the page header text
    async validatePageHeader(expectedHeader: string, headerLocator: Locator) {
        // Assert that the header locator has the expected text
        await expect(headerLocator).toHaveText(expectedHeader);
    }
    // Method to get the current page URL
    async navigateToUrl(url: string) {
        // Navigate to the specified URL
        await this.page.goto(url);
    }
    // Method to click on a specified element locator
    async clickOnElement(elementLocator: Locator) {
        // Click on the specified element locator
        await elementLocator.click();
    }
    // Method to fill an input field with a specified value
    async fillInputField(fieldLocator: Locator, value: string) {
        // Click on the field, fill it with the specified value, and assert the input
        await this.clickOnElement(fieldLocator);
        await fieldLocator.fill(value);
        await this.inputFieldAssertText(fieldLocator, value);
    }
    // Method to assert that an input field contains the expected text
    async inputFieldAssertText(locator: Locator, expectedText: string) {
        // Assert that the locator has the expected value
        await expect(locator).toHaveValue(expectedText);
    }
    // Method to select an option from a dropdown menu
    async selectOptionFromDropdown(dropdownLocator: Locator, optionValue: string) {
        // Select the option with the specified label from the dropdown
        await dropdownLocator.selectOption({label: optionValue });
        await this.inputFieldAssertText(dropdownLocator, optionValue);
    }
    // Method to validate an alert message
    async validateAlertMessage(expectedMessage: string, alertLocator: Locator) {
        // Assert that the alert locator has the expected text
        await expect(alertLocator).toHaveText(expectedMessage);
    }

}