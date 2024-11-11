import { type Locator, type Page } from '@playwright/test';
import { HomePage } from './homePage';

export class ContactPage {
    readonly page: Page;
    readonly contactModalTitle: Locator;
    readonly contactEmailField: Locator;
    readonly contactNameField: Locator;
    readonly contactMessageField: Locator;
    readonly contactSendBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactModalTitle = page.locator('h5', {hasText: 'New Message'});
        this.contactEmailField = page.locator('[id="recipient-email"]');
        this.contactNameField = page.locator('[id="recipient-name"]');
        this.contactMessageField = page.locator('[id="message-text"]');
        this.contactSendBtn = page.getByRole('button', {name: 'Send Message'});
    };

    async fillContactForm(email: string, name: string, message: string) {
        await this.contactEmailField.fill(`${email}`);
        await this.contactNameField.fill(`${name}`);
        await this.contactMessageField.fill(`${message}`);
    }
}