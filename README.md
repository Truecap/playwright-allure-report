## Technology

- [Java Script](https://learn.javascript.ru/)
- [Playwright](https://playwright.dev/)
- [Visual Studio Code](https://code.visualstudio.com/)



## Steps to run

- Clone the repository using "git clone "

- npm install


## Run test

# You should have installeted browsers (firefox/chrome) for local running ui tests

- Running all tests

npx playwright test

- Running a single test file

npx playwright test landing-page.spec.ts

- Running tests in headed mode

npx playwright test landing-page.spec.ts --headed

- Running tests on a specific project

npx playwright test landing-page.ts --project=chromium


- Or you can use npm run "scripts"

## Allure-report

# Installation

npm i -D @playwright/test allure-playwright

# Usage

- Either add allure-playwright into playwright.config.ts:

{
  reporter: "allure-playwright";
}