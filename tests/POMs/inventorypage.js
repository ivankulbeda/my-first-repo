import {expect} from '@playwright/test';
export class InventoryPage {
    constructor (page) {
        this.page = page;
        this.title = page.locator('[class ="title"]');
        this.cart = page.locator('[data-test="shopping-cart-link"]');
        this.list = page.locator('[data-test="inventory-container"]');
        this.sortbutton = page.locator('[data-test="product-sort-container"]');
    }
    async addItemToCart (itemname) {
        this.button = this.page.locator(`[data-test^="add-to-cart-${itemname}"]`);
        await this.button.click();
    }
    async openCart () {
        await this.cart.click();
    }
    async getPageTitle () {
        await expect (this.title).toBeVisible();
    }
    async sort () {
        await this.sortbutton.selectOption('hilo');
    }
}
