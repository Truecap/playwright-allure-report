const { expect } = require("@playwright/test");
const { timeout } = require("../playwright.config");
const email = "testsne13@gmail.com";
const password = "Test1234test!";
const invalidEmail = "someemail@gmail.com";
const invalidPassword = "12345";

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.logInBtn = page.locator('[id="dialogAudio"] +a +a');
    this.emailInput = page.locator('form>div>div input[name="email"]');
    this.passwordInput = page.locator('form>div>div input[name="password"]');
    this.submitBtn = page.locator('button[class*="LoginForm__LoginButton"]');
    this.errorMessage = page.locator('[class*="ilxvtf"]');
  }
  async logInInvalidEmail() {
    await this.logInBtn.click();
    await this.emailInput.fill(invalidEmail);
    await this.passwordInput.fill(password);
    await this.submitBtn.waitFor({ timeout: 10000 });
    await this.submitBtn.click();
    await this.page.waitForLoadState();
  }

  async loginInvalidPassword() {
    await this.logInBtn.click();
    await this.emailInput.waitFor({ timeout: 10000 });
    await this.emailInput.fill(email);
    await this.passwordInput.fill(invalidPassword);
    await this.submitBtn.waitFor({ timeout: 10000 });
    await this.submitBtn.click();
  }
  async validateLoginError() {
    await expect(this.errorMessage).toBeVisible();
};
};
