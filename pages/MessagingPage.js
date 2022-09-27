const { expect } = require("@playwright/test");
exports.MessagingPage = class MessagingPage {
  constructor(page) {
    this.page = page;
    this.countryDrpDwn = page.locator(".hIHHxS>div:nth-of-type(1)");
    this.currencyDrpDwn = page.locator(".hIHHxS>div:nth-of-type(2)");
    this.ukraineFromDrpDwn = page.locator('[href="/pricing/messaging/ua"]');
    this.priceSmsUaUsd = page.locator("//*[text() = '$0.104']");
    this.priceSmsUaEur = page.locator("//*[text() = '€0.103']");
    this.euroFromDrpDwnCurrency = page.locator('//div[text() ="EUR"]');
  }

  async chooseEuro() {
    await this.currencyDrpDwn.click();
    await this.euroFromDrpDwnCurrency.waitFor();
    await this.euroFromDrpDwnCurrency.click();
    await expect(this.currencyDrpDwn).toContainText("EUR");
  }
  async chooseUkraine() {
    await this.countryDrpDwn.click();
    await this.ukraineFromDrpDwn.waitFor();
    await this.ukraineFromDrpDwn.click();
    await expect(this.countryDrpDwn).toContainText("Ukraine");
  }
};
