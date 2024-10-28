import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
})

test.describe('test suite - navigation and text verification', () => {
    test('should be able to verify and navigate tabs options', async ({ page }) => {
        await expect(page).toHaveURL('/');
    });
})

