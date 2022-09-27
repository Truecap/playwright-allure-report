const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/MainPage.js");

test("should login with invalid email", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.launchWebApp();
  await mainPage.logInInvalidEmail();
  await mainPage.validateLoginError();
});
test("should login with invalid password", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.launchWebApp();
  await mainPage.loginInvalidPassword();
  await mainPage.validateLoginError();
});
