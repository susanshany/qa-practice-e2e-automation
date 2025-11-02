import { Locator, Page,expect } from '@playwright/test';
import { HelperBase } from './helperBase';
export class FormHomePage extends HelperBase {
    readonly pageHeader: Locator
    readonly firstNameLocator: Locator
    readonly lastNameLocator: Locator
    readonly phoneNumberLocator: Locator
    readonly countryLocator: Locator
    readonly emailAddressLocator: Locator
    readonly passwordLocator: Locator
    readonly agreeToTermsLocator: Locator
    readonly registertButtonLocator: Locator
    readonly successMessageLocator: Locator
    readonly successDisplyFirstNameLocator: Locator
    readonly successDisplyLastNameLocator: Locator
    readonly successDisplyPhoneNumberLocator: Locator
    readonly successDisplyCountryLocator: Locator
    readonly successDisplyEmailAddressLocator: Locator
    readonly successMessage: string
    readonly alertLocator: Locator
    readonly lastNameAlert: string
    readonly phoneNumberAlert: string
    readonly emailAlert: string
    readonly passwordAlert: string
    constructor(page: Page) {
        super(page);
        this.pageHeader = page.locator('h2');
        this.firstNameLocator = page.locator('#firstName');
        this.lastNameLocator = page.locator('#lastName');
        this.phoneNumberLocator = page.locator('#phone');
        this.countryLocator = page.locator('#countries_dropdown_menu');
        this.emailAddressLocator = page.locator('#emailAddress');
        this.passwordLocator = page.locator('#password');
        this.agreeToTermsLocator = page.locator('#exampleCheck1');
        this.registertButtonLocator = page.getByRole('button', { name: 'Register' });
        this.successMessageLocator = page.getByRole('alert', { name: 'Successfully registered the following information' });
        this.successDisplyFirstNameLocator = page.locator('#resultFn');
        this.successDisplyLastNameLocator = page.locator('#resultLn');
        this.successDisplyPhoneNumberLocator = page.locator('#resultPhone');
        this.successDisplyCountryLocator = page.locator('#country');
        this.successDisplyEmailAddressLocator = page.locator('#resultEmail');
        this.alertLocator = page.locator('#message');
        this.successMessage= 'Successfully registered the following information';
        this.lastNameAlert= 'Please enter your last name!';
        this.phoneNumberAlert= 'The phone number should contain at least 10 characters!';
        this.emailAlert='Please enter a valid email address!';
        this.passwordAlert='The password should contain between [6,20] characters!';


    }
    async enterFirstName(firstName: string) {
        if (firstName !== '') {
            await this.fillInputField(this.firstNameLocator, firstName);
        }
    }
    async enterLastName(lastName: string) {
        if (lastName !== '') {
            await this.fillInputField(this.lastNameLocator, lastName);
        }
    }
    async enterPhoneNumber(phoneNumber: string) {
        if (phoneNumber !== ''){
            await this.fillInputField(this.phoneNumberLocator, phoneNumber);
        }
    }
    async selectCountry(country: string) {
        if (country !== ''){
            await this.selectOptionFromDropdown(this.countryLocator, country);
        }
    }
    async enterEmailAddress(emailAddress: string) {
        if (emailAddress !== ''){
            await this.fillInputField(this.emailAddressLocator, emailAddress);
        }
    }
    async enterPassword(password: string) {
        if (password !== ''){
            await this.fillInputField(this.passwordLocator, password);
        }
    }
    async checkAgreeToTerms(agreeToTerms: boolean) {
        
            if (agreeToTerms===true) {
                await this.clickOnElement(this.agreeToTermsLocator);
            }
    }
    async clickRegisterButton() {
        await this.clickOnElement(this.registertButtonLocator);
    }
    async validateFormHomePageLoaded() {
        await this.validatePageHeader('CHALLENGE - Spot the BUGS!', this.pageHeader);
    }
    async fillForm(
        firstName: string, 
        lastName: string, 
        phoneNumber: string, 
        country: string, 
        emailAddress: string, 
        password: string, 
        agreeToTerms: boolean
        ) {
            await this.enterFirstName(firstName);
            await this.enterLastName(lastName);
            await this.enterPhoneNumber(phoneNumber);
            await this.selectCountry(country);
            await this.enterEmailAddress(emailAddress);
            await this.enterPassword(password);
            await this.checkAgreeToTerms(agreeToTerms);
            await this.clickRegisterButton();
    }
    async validateSuccessMassage(
        conditionType: string,
        firstName: string, 
        lastName: string,
        phoneNumber: string,
        country: string,
        emailAddress: string,
        password: string
        ) {
            if (conditionType === 'positive') {
                await expect(this.alertLocator).toHaveText(this.successMessage);
                /*
                await this.inputFieldAssertText(this.successDisplyFirstNameLocator, "First Name: "+firstName);
                await this.inputFieldAssertText(this.successDisplyLastNameLocator, "Last Name: "+lastName);
                await this.inputFieldAssertText(this.successDisplyPhoneNumberLocator, "Phone Number: "+phoneNumber);
                await this.inputFieldAssertText(this.successDisplyCountryLocator, "Country: "+country);
                await this.inputFieldAssertText(this.successDisplyEmailAddressLocator, "Email:"+emailAddress);
                */
        }
            else if (conditionType === 'negative') {
                if (lastName === '') {
                    await this.validateAlertMessage(this.lastNameAlert, this.alertLocator);
                }
                if (phoneNumber === '') {
                    await this.validateAlertMessage(this.phoneNumberAlert, this.alertLocator);
                }
                if (emailAddress === '') {
                    await this.validateAlertMessage(this.emailAlert, this.alertLocator);
                }
                if (password === '') {
                    await this.validateAlertMessage(this.passwordAlert, this.alertLocator);
                }
        }
    }
                
        }
