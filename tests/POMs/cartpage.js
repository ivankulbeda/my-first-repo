import {expect} from '@playwright/test';
export class CartPage {
    constructor (page) {
        this.page = page;
        this.itemsList = page.locator ('.cart_item');
        this.checkout = page.locator ('[data-test="checkout"]');
        this.continueShopping = page.locator ('[data-test="continue-shopping"]');   
      }
      async checkItemList () {
        await expect (this.itemsList).toBeVisible();
      }
      async goToCheckout () {
        await this.checkout.click();
      }
}