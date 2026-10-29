export class LoginPage {
    constructor (page) {
        this.page = page;
        this.userLogin = page.locator('[data-test = "username"]');
        this.password = page.locator('[data-test = "password"]');
        this.loginButton = page.locator ('[data-test = "login-button"]');
        this.error = page.locator('[data-test = "error"]');

    }
    async open (){
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login (username,password) {
        await this.userLogin.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}