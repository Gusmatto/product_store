import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/');
})

test.describe('Test suite - Login flows', () => {
    test('user should be able to login with correct credentials', async ({ page }) => {
        await loginPage.login('Nabuco', '1234');
        await page.waitForTimeout(5000);
    });
});

