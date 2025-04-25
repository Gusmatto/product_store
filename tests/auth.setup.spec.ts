import { test, expect } from '@playwright/test';

test.describe('API Login', () => {
  test('Login and validate token', async ({ request }) => {
    // Perform the login request
    const response = await request.post('https://api.demoblaze.com/check', {
      data: { token: "TmFidWNvMTczMzkyOQ==" },
    });

    // Add a products to the cart
    await request.post('https://api.demoblaze.com/addtocart', {
      data: {
        id: "fb19fd3f-0b13-adba-ee91-d92ace811e47",
        cookie: "TmFidWNvMTczMzkyOQ==",
        prod_id: 8,
        flag: true,
      },
    });

    await request.post('https://api.demoblaze.com/addtocart', {
      data: {
        id: "58285fbc-2deb-5b21-a7c2-ed805ed32191",
        cookie: "TmFidWNvMTczMzkyOQ==",
        prod_id: 3,
        flag: true,
      },
    });
  });
});