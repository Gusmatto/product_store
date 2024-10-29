import { expect, test } from '@playwright/test';
import { HomePage  } from '../pages/homePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('/');
})

test.describe('test suite - navigation and text verification', () => {
    test('should be able to verify and navigate tabs options', async ({ page }) => {
        await expect(page).toHaveURL('/');

        // Nav var
        await expect(homePage.headerProductStore).toHaveText('PRODUCT STORE');
        await expect(homePage.homeBtn).toBeVisible();
        await expect(homePage.contactBtn).toBeVisible();
        await expect(homePage.aboutUsBtn).toBeVisible();
        await expect(homePage.cartBtn).toBeVisible();
        await expect(homePage.loginBtn).toBeVisible();
        await expect(homePage.signupBtn).toBeVisible();

        // Categories
        await expect(homePage.categoriesTitle).toBeVisible();
        await expect(homePage.phonesCategory).toBeVisible();
        await expect(homePage.laptopsCategory).toBeVisible();
        await expect(homePage.monitorsCategory).toBeVisible();

        // Footer
        await expect(homePage.footerAboutUs).toBeVisible();
        await expect(homePage.footerGetInTouch).toBeVisible();
    });
})

