const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/MainPage.js");

test("should open pop-upwindow pricing", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.launchWebApp();
  await mainPage.openPricingDrpDwn();
  await mainPage.smsApiPricingDrpDwn.waitFor();
  await expect(mainPage.smsApiPricingDrpDwn).toBeVisible();
});

test("should open pop-upwindow solutions", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.launchWebApp();
  await mainPage.openSolutionsDrpDwn();
  await mainPage.contactCenterBtnSolutionsDrpDwn.waitFor();
  await expect(mainPage.contactCenterBtnSolutionsDrpDwn).toBeVisible();
});
test("should open pop-upwindow resources", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.launchWebApp();
  await mainPage.openResourcesDrpDwn();
  await mainPage.blogBtnResorcesDrpDwn.waitFor();
  await expect(mainPage.blogBtnResorcesDrpDwn).toBeVisible();
});
test("should open pop-upwindow company", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.launchWebApp();
  await mainPage.openCompanyDrpDwn();
  await mainPage.elementsCompanyTab.waitFor();
  await expect(mainPage.elementsCompanyTab).toBeVisible();
});
test("should open pop-upwindow products", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.launchWebApp();
  await mainPage.openProductTab();
  await mainPage.elementsProductTab.waitFor();
  await expect(mainPage.elementsProductTab).toBeVisible();
});

test("should click on network tab and redirected to network page", async ({
  page,
}) => {
  const mainPage = new MainPage(page);
  await mainPage.launchWebApp();
  await mainPage.clickNetworklink();
  await mainPage.headerOnNetworkPage.waitFor();
  await expect(mainPage.headerOnNetworkPage).toHaveText(
    "The Global, Private Network Built for Real-Time Comms."
  );
});
