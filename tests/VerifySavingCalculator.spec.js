const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/MainPage.js");
const { CalculatorPage } = require("../pages/SavingCalculatorPage");

test("Should verify saving calculator with messaging API", async ({ page }) => {
  const mainPage = new MainPage(page);
  const calculatorPage = new CalculatorPage(page);
  await mainPage.launchWebApp();
  await mainPage.openSavingCalculatorPage();
  await calculatorPage.chooseParams();
  await expect(calculatorPage.possibleSavingsImg).toBeVisible();
});
