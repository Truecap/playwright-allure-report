const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/MainPage.js");

test("Should verify saving calculator with messaging API", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.launchWebApp();
  await mainPage.openBlogPage();
  await mainPage.find();
  await mainPage.validateForSearch();
});
