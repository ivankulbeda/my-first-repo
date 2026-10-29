export class CheckoutStepTwoPage {
    constructor (page) {
        this.page = page;
        this.checkout = page.locator('[data-test="checkout-summary-container"]');
        this.totalSum = page.locator('[data-test="total-label"]');
        this.finishButton = page.locator('[data-test="finish"]');
    }
    async finishCheckout () {
        await this.finishButton.click();
    }
}