const { test, expect } = require ('@playwright/test');
test ('Log into the system', async ({page})=>{
    await page.goto ('https://www.saucedemo.com/')
    await page.locator ('[placeholder="Username"]').fill ('standard_user');

await page.locator ('[placeholder="Password"]').fill ('secret_sauce');

await page.locator ('[id="login-button"]').click ();

await expect (page).toHaveURL ('https://www.saucedemo.com/inventory.html')
});

test ('Failed log in', async ({page})=>{
    await page.goto ('https://www.saucedemo.com/');
    await page.locator ('[placeholder="Username"]').fill ('locked_out_user');
    await page.locator ('[placeholder="Password"]').fill ('secret_sauce');
    await page.locator ('[id="login-button"]').click ();
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
})