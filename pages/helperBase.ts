import { Locator,expect, Page } from '@playwright/test';
export class HelperBase {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    async validatePageHeader(expectedHeader: string, headerLocator: Locator) {
        await expect(headerLocator).toHaveText(expectedHeader);
    }
    async navigateToUrl(url: string) {
        await this.page.goto(url);
    }
    async clickOnElement(elementLocator: Locator) {
        await elementLocator.click();
    }
    async fillInputField(fieldLocator: Locator, value: string) {
        await this.clickOnElement(fieldLocator);
        await fieldLocator.fill(value);
        await this.inputFieldAssertText(fieldLocator, value);
    }
    async inputFieldAssertText(locator: Locator, expectedText: string) {
        await expect(locator).toHaveValue(expectedText);
    }
    async selectOptionFromDropdown(dropdownLocator: Locator, optionValue: string) {
        await dropdownLocator.selectOption({label: optionValue });
        await this.inputFieldAssertText(dropdownLocator, optionValue);
    }
    async validateAlertMessage(expectedMessage: string, alertLocator: Locator) {
        await expect(alertLocator).toHaveText(expectedMessage);
    }

}