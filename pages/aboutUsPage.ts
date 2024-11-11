import { type Locator, type Page } from '@playwright/test';

export class AboutUsPage {
    readonly page: Page;
    readonly aboutUsTitle: Locator;
    readonly closePlayVideoBtn: Locator;

    constructor(page: Page) {
        this.aboutUsTitle = page.locator('[id="videoModalLabel"]', { hasText: 'About us'});
        this.closePlayVideoBtn = page.locator('#videoModal').getByText('Close', { exact: true });
    }

    async playAboutUsVideo() {
        await this.closePlayVideoBtn.click();
    }
}