import { type Locator, type Page } from '@playwright/test';
import { HomePage } from './homePage';

export class ContactPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    };

    async navigateToContactForm() {
        const homePage = new HomePage(this.page);
        await homePage.contactBtn.click();
    }
}