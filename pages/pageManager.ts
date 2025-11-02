import { Page } from "@playwright/test";
import { FormHomePage } from "./formHomePage";

export class PageManager {
    readonly page: Page;
    readonly formHomePage: FormHomePage;
    constructor(page: Page) {
        this.page = page;
        this.formHomePage = new FormHomePage(this.page);
    }
    formHome(){
        return this.formHomePage;
    }
}