const { expect } = require("@playwright/test");


exports.MainPage = class MainPage {
  constructor(page) {
    this.page = page;

    this.closeButtonCookie = page.locator(
      '[aria-label="close and deny"]~div>div>button'
    );
    this.pricingTab = page.locator('[class*="khahzD"]:last-of-type');
    this.smsApiPricingDrpDwn = page.locator(
      'header [href="/pricing/messaging"]'
    );
    this.solutionsTab = page.locator('[class*="khahzD"]:nth-of-type(2)');
    this.elementsSolutionsTab = page.locator(
      'header .mchNoDecorate[href*="/solutions/"]'
    );
    this.contactCenterBtnSolutionsDrpDwn = page.locator(
      '[href="/use-cases/contact-center"]'
    );
    this.companyTab = page.locator('[class*="khahzD"]:nth-of-type(5)');
    this.elementsCompanyTab = page.locator('div>[href="/company/careers"]');
    this.productTab = page.locator('[class*="khahzD"]:nth-of-type(1)');
    this.elementsProductTab = page.locator('div>[href="/products/sip-trunks"]');
    this.networkTab = page.locator('[class*="khahzD"]:nth-of-type(3)');
    this.headerOnNetworkPage = page.locator('h1[class*="clNvhv gVIlze"]');
    this.footerAboutUsBtn = page.locator('//*[text()= "About Us"]');
    this.homePagebutton = page.locator('[id*="Logo"]');
    this.homePagePicture = page.locator("main>div:nth-of-type(1)");
    this.aboutUsHeader = page.locator('[class*="clUAcO"]');
    this.resourcesTab = page.locator('[class*="khahzD"]:nth-of-type(4)');
    this.savingCalculatorBtnResourcesDrpDwn = page.locator(
      '[href="/twilio-pricing-calculator"]'
    );
    this.blogBtnResorcesDrpDwn = page.locator(
      'header .mchNoDecorate[href="/resources"]'
    );
    this.searchingResults = page.locator('[id="articles"]');
    this.searchIpnutBlogPage = page.locator('[type="search"]');
  }
  async launchWebApp() {
    await this.page.goto("https://telnyx.com/");

    if (await this.closeButtonCookie.isVisible()) {
      await this.closeButtonCookie.click();
    }
  }

 

  async openPricingDrpDwn() {
    await this.pricingTab.hover();
  }
  async openMessagingPage() {
    await this.pricingTab.hover();
    await this.smsApiPricingDrpDwn.click();
    await expect(this.page).toHaveURL("https://telnyx.com/pricing/messaging");
  }
  async openSolutionsDrpDwn() {
    await this.solutionsTab.hover();
  }
  async openContactCenterPage() {
    await this.openSolutionsDrpDwn();
    await this.contactCenterBtnSolutionsDrpDwn.click();
    await expect(this.page).toHaveURL(
      "https://telnyx.com/use-cases/contact-center"
    );
  }
  async openAboutUsPage() {
    await this.footerAboutUsBtn.scrollIntoViewIfNeeded();
    await this.footerAboutUsBtn.click();
    await expect(this.aboutUsHeader).toBeVisible();
  }
  async clickHomePageBtn() {
    await this.homePagebutton.click();
    await this.homePagePicture.waitFor();
  }
  async openResourcesDrpDwn() {
    await this.resourcesTab.hover();
  }
  async openSavingCalculatorPage() {
    await this.openResourcesDrpDwn();
    await this.savingCalculatorBtnResourcesDrpDwn.click();
  }
  async openBlogPage() {
    await this.openResourcesDrpDwn();
    await this.blogBtnResorcesDrpDwn.click();
    await expect(this.page).toHaveURL("https://telnyx.com/resources");
  }
  async find() {
    await this.searchIpnutBlogPage.fill("number pool");
    await this.page.keyboard.press("Enter");
  }
  async validateForSearch() {
    await this.searchingResults.waitFor();
    await expect(this.searchingResults).toBeVisible();
  }
  async openCompanyDrpDwn() {
    await this.companyTab.hover();
  }
  async openProductTab() {
    await this.productTab.hover();
  }
  async clickNetworklink() {
    await this.networkTab.click();
  }
};
