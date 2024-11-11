import { expect, test } from '@playwright/test';
import { ContactPage } from '../pages/contacPage';
import { HomePage } from '../pages/homePage';
import { AboutUsPage } from '../pages/aboutUsPage';
import { faker } from '@faker-js/faker';

let contactPage: ContactPage;
let homePage: HomePage;
let aboutUsPage: AboutUsPage;

test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    homePage = new HomePage(page);
    aboutUsPage = new AboutUsPage(page);
    await page.goto('/');
});

test.describe('test suite - validate flows of pages', () => {
    test('should be able to complete contact form', async ({ page }) => {
        await homePage.contactBtn.click();
        await expect(contactPage.contactModalTitle).toBeVisible();
        await contactPage.fillContactForm(faker.internet.email(), faker.internet.username(), faker.lorem.sentence());
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
        await contactPage.contactSendBtn.click();
        await expect(contactPage.contactModalTitle).not.toBeVisible();
    });

    test('should be able to click on About Us button', async ({ page }) => {
        await homePage.aboutUsBtn.click();
        await expect(aboutUsPage.aboutUsTitle).toBeVisible();
        await aboutUsPage.playAboutUsVideo();
        await expect(aboutUsPage.aboutUsTitle).not.toBeVisible();
    });
})