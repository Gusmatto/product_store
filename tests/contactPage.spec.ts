import { expect, test } from '@playwright/test';
import { ContactPage } from '../pages/contacPage';

let contactPage: ContactPage;

test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await page.goto('/');
});

test.describe('test suite - validate flows of pages', () => {
    test('should be able to complete contact form', async ({ page }) => {
        await contactPage.navigateToContactForm();
    });
})