export class CheckoutStepOnePage {
    constructor (page) {
        this.page = page;
        this.firstname = page.locator('[data-test="firstName"]');
        this.lastname = page.locator('[data-test="lastName"]');
        this.postalcode = page.locator('[data-test="postalCode"]');
        this.button = page.locator('[data-test="continue"]');
    }
    async fillUserInfo (firstName,lastName,postalCode) {
        await this.firstname.fill(firstName);
        await this.lastname.fill(lastName);
        await this.postalcode.fill(postalCode);
    }
    async continueCheckout () {
        await this.button.click();
    }
}