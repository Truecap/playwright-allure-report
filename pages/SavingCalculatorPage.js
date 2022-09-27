const { expect } = require("@playwright/test");
exports.CalculatorPage = class CalculatorPage {
  constructor(page) {
    this.page = page;
    this.messagingApiBtn = page.locator("//*[text() ='Messaging API']");
    this.continueButton = page.locator("main div>button.hBNXWZ");
    this.localNumbersInput = page.locator("#local-numbers");
    this.tollFreeNumbersInput = page.locator("#toll-free-numbers");
    this.possibleSavingsImg = page.locator("[class='sc-1d1c658f-0 iHDmXz']");
  }
  async chooseParams() {
    await this.messagingApiBtn.click();
    await this.continueButton.click();
    await this.localNumbersInput.fill("1");
    await this.tollFreeNumbersInput.fill("1");
    await this.continueButton.click();
  }
  async validateSavingCalculator() {
    await expect(this.possibleSavingsImg).toBeVisible();
  }
};
