import { expect, test } from '@playwright/test';

test.describe('Test Suite', () => {
    test('the user should be able to fill a form', async ( { page }) => {
        await page.goto('https://www.avenuecode.com/');
        await page.getByText("Let's Talk").click();
        await expect(page).toHaveURL('https://www.avenuecode.com/lets-talk/');
        await page.locator('#country-cbda8f6c-54e4-49fd-9ca2-61642da407b6').fill('Argentina');
    });
});
