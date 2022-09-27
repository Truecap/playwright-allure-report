const { test, expect } = require("@playwright/test");
const { MessagingPage } = require("../pages/MessagingPage.js");
const { MainPage } = require("../pages/MainPage.js");

test("Should to show price for SMS API for Ukraine in usd", async ({
  page,
}) => {
  const messagingPage = new MessagingPage(page);
  const mainPage = new MainPage(page);
  await mainPage.launchWebApp();
  await mainPage.openMessagingPage();
  await messagingPage.chooseUkraine();
  await expect(messagingPage.priceSmsUaUsd).toBeVisible();
});
test("Check if the price for SMS API for Ukrain will change in Euro.", async ({
  page,
}) => {
  const messagingPage = new MessagingPage(page);
  const mainPage = new MainPage(page);
  await mainPage.launchWebApp();
  await mainPage.openMessagingPage();
  await messagingPage.chooseUkraine();
  await messagingPage.chooseEuro();
  await expect(messagingPage.priceSmsUaEur).toBeVisible();
});
