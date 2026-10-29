import { test,expect } from '@playwright/test';
import { LoginPage } from './loginpage';
import { InventoryPage } from './inventorypage';
import { CartPage } from './cartpage';
import { CheckoutStepOnePage } from './CheckoutStepOnePage';
import { CheckoutStepTwoPage } from './CheckoutStepTwoPage';
import { CheckoutCompletePage } from './CheckoutCompletePage';

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
    await cartpage.checkItemList ();
    await cartpage.goToCheckout();
    await checkoutstepone.fillUserInfo('Ivan','Kulbeda','11111');
    await checkoutstepone.continueCheckout();
    await checkoutsteptwo.finishCheckout();
    await checkoutcomplete.getCompletionMessage();
})