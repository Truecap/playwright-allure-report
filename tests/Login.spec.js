const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/MainPage.js");
const { LoginPage } = require("../pages/LoginPage.js");

test("should login with invalid email", async ({ page }) => {
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);
  await mainPage.launchWebApp();
  await loginPage.logInInvalidEmail();
  await loginPage.validateLoginError();
});
test("should login with invalid password", async ({ page }) => {
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);
  await mainPage.launchWebApp();
  await loginPage.loginInvalidPassword();
  await loginPage.validateLoginError();
});
