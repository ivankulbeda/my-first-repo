const { test,expect }= require ('@playwright/test');
test ('Log into the system', async ({page})=>{
    await page.goto ('https://www.saucedemo.com/');
    await page.locator ('[placeholder="Username"]').fill('standard_user');
    await page.locator ('[placeholder="Password"]').fill ('secret_sauce');
    await page.locator ('[id="login-button"]').click();
    await expect (page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect (page.locator('button:has-text("Add to cart")')).toHaveCount(6);

});