import { test,expect } from '@playwright/test';
import { LoginPage } from './POMs/loginpage';
import { InventoryPage } from './POMs/inventorypage';
import { CartPage } from './POMs/cartpage';
import { CheckoutStepOnePage } from './POMs/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from './POMs/CheckoutStepTwoPage';
import { CheckoutCompletePage } from './POMs/CheckoutCompletePage';

test ('End-to-end test', async ({page})=>{
    const loginpage = new LoginPage (page);
    const inventorypage = new InventoryPage(page);
    const cartpage = new CartPage (page);
    const checkoutstepone = new CheckoutStepOnePage (page);
    const checkoutsteptwo = new CheckoutStepTwoPage (page);
    const checkoutcomplete = new CheckoutCompletePage (page);

    await loginpage.open();
    await loginpage.login('standard_user','secret_sauce');
    await inventorypage.getPageTitle();
    await inventorypage.sort();
    await inventorypage.addItemToCart ('sauce-labs-fleece-jacket');
    await inventorypage.openCart();
    await cartpage.check ();
    await cartpage.goToCheckout();
    await checkoutstepone.fillUserInfo('Ivan','Kulbeda','11111');
    await checkoutstepone.continueCheckout();
    await checkoutsteptwo.finishCheckout();
    await checkoutcomplete.getCompletionMessage();
})