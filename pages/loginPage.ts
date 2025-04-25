import { type Locator, type Page, request, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly loginForm: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginSubmitBtn: Locator;
    readonly welcomeMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator('#login2');
        this.loginForm = page.locator('#logInModalLabel');
        this.usernameField = page.locator('#loginusername');
        this.passwordField = page.locator('#loginpassword');
        this.loginSubmitBtn = page.getByRole('button', { name: 'Log in'});
        this.welcomeMessage = page.locator('[id="nameofuser"]');
    }

    async login(username: string, password: string) {
        await this.loginButton.click();
        await expect(this.loginForm).toBeVisible();
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginSubmitBtn.click();
        await expect(this.loginForm).not.toBeVisible();
        await expect(this.welcomeMessage).toHaveText(`Welcome ${username}`);
    }

    /* async apiLogin() {
        const apiContext = await request.newContext();
        const response = await apiContext.post('https://api.demoblaze.com/check', {
        data: {
            username: "Nabuco", // Replace with valid credentials if needed
            password: "1234", // If required by the endpoint
        },
    });

    // Ensure the request was successful
    expect(response.ok()).toBeTruthy();

    // Extract the API response
    const apiResponse = await response.json();
    const { token, username, expiration } = apiResponse;

    console.log(`Token: ${token}, Username: ${username}, Expiration: ${expiration}`);

    // Step 2: Set the token and user info in localStorage
    await this.page.goto('https://www.demoblaze.com/'); // Replace with your application's URL

    await this.page.evaluate(([token, username]) => {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
    }, [token, username]);

    // Step 3: Reload the page and verify the session is active
    await this.page.reload();

    } */
}