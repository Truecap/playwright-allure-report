const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/MainPage.js");
const { ContactCenterPage } = require("../pages/ContactCenerPage.js");

test("Should verify clickability buttons on contact center page", async ({
  page,
}) => {
  const mainPage = new MainPage(page);
  const contactCenterPage = new ContactCenterPage(page);
  await mainPage.launchWebApp();
  await mainPage.openContactCenterPage();
  await contactCenterPage.clickPhoneCallsBtn();
  await contactCenterPage.validatePhoneCallsButton();
  await page.goBack();
  await contactCenterPage.clickMessagesBtn();
  await contactCenterPage.validateTextMessagesButton();
  await page.goBack();
  await contactCenterPage.clickBrowserBasedBtn();
  await contactCenterPage.validateBassedCommsButton();
});
