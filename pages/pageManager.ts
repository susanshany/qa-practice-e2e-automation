import { Page } from "@playwright/test";
import { FormHomePage } from "./formHomePage";
// PageManager class to manage different page objects
export class PageManager {
    readonly page: Page;
    readonly formHomePage: FormHomePage;
    // Initialize page objects in the constructor
    constructor(page: Page) {
        this.page = page;
        this.formHomePage = new FormHomePage(this.page);
    }
    // Method to get the FormHomePage object
    formHome(){
        return this.formHomePage;
    }
}