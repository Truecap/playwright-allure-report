const { expect } = require("@playwright/test");
exports.ContactCenterPage = class ContactCenterPage {
  constructor(page) {
    this.page = page;
    this.phoneCallsButton = page.locator(
      '//*[text()= "Explore Elastic SIP Trunking"]'
    );
    this.phoneCallsHeader = page.locator("h1>span");
    this.textMessagesButton = page.locator('//*[text()= "Explore SMS API"]');
    this.textMessagesHeader = page.locator("h1>span");
    this.browserBasedCommsButton = page.locator(
      '//*[text()= "Explore WebRTC"]'
    );
    this.browserBasedCommsHeader = page.locator("h1>span");
  }
  async clickPhoneCallsBtn() {
    await this.phoneCallsButton.scrollIntoViewIfNeeded();
    await this.phoneCallsButton.click();
  }
  async validatePhoneCallsButton() {
    await this.phoneCallsHeader.waitFor();
    await expect(this.phoneCallsHeader).toBeVisible();
    await expect(this.phoneCallsHeader).toHaveText(
      "SIP Trunking for instant, unlimited global scale."
    );
  }
  async clickMessagesBtn() {
    await this.textMessagesButton.click();
  }
  async validateTextMessagesButton() {
    await this.textMessagesHeader.waitFor();
    await expect(this.textMessagesHeader).toBeVisible();
    await expect(this.textMessagesHeader).toHaveText("SMS API");
  }
  async clickBrowserBasedBtn() {
    await this.browserBasedCommsButton.click();
  }
  async validateBassedCommsButton() {
    await this.browserBasedCommsHeader.waitFor();
    await expect(this.browserBasedCommsHeader).toBeVisible();
    await expect(this.browserBasedCommsHeader).toHaveText(
      "WebRTC for real-time, contextual communications"
    );
  }
};
