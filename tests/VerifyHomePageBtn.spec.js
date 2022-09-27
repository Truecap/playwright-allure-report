const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/MainPage.js");

test("Should click about us button then home page button", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.launchWebApp();
  await mainPage.openAboutUsPage();
  await mainPage.clickHomePageBtn();
  await expect(mainPage.homePagePicture).toBeVisible();
});
