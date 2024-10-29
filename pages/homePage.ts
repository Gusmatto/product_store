import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly headerProductStore: Locator;
    readonly homeBtn: Locator;
    readonly contactBtn: Locator;
    readonly aboutUsBtn: Locator;
    readonly cartBtn: Locator;
    readonly loginBtn: Locator;
    readonly signupBtn: Locator;
    readonly footerAboutUs: Locator;
    readonly footerGetInTouch: Locator;
    readonly categoriesTitle: Locator;
    readonly phonesCategory: Locator;
    readonly laptopsCategory: Locator;
    readonly monitorsCategory: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerProductStore = page.locator('#nava', {hasText: "PRODUCT STORE"});
        this.homeBtn = page.locator('.nav-link', {hasText: "Home"});
        this.contactBtn = page.locator('.nav-link', {hasText: "Contact"});
        this.aboutUsBtn = page.locator('.nav-link', {hasText: "About us"});
        this.cartBtn = page.locator('.nav-link', {hasText: "Cart"});
        this.loginBtn = page.locator('.nav-link', {hasText: "Log in"});
        this.signupBtn = page.locator('.nav-link', {hasText: "Sign up"});
        this.categoriesTitle = page.locator('#cat', {hasText: "CATEGORIES"});
        this.phonesCategory = page.locator('[onclick="byCat(\'phone\')"]');
        this.laptopsCategory = page.locator('[onclick="byCat(\'notebook\')"]');
        this.monitorsCategory = page.locator('[onclick="byCat(\'monitor\')"]');
        this.footerAboutUs = page.locator('h4', {hasText: "About Us"});
        this.footerGetInTouch = page.locator('h4', {hasText: "Get in Touch"});
    }


}