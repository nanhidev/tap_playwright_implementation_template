// Load environment variables
require('dotenv').config();

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './src/tests',

  /* ✅ Global Timeout */
  timeout: 60000,

  /* ✅ Expect timeout (important for assertions) */
  expect: {
    timeout: 10000
  },

  /* ✅ Run tests in parallel */
  fullyParallel: true,

  /* ✅ Fail fast in CI */
  forbidOnly: !!process.env.CI,

  /* ✅ Retry logic (VERY IMPORTANT for flaky tests) */
  retries: process.env.CI ? 2 : 1,

  /* ✅ Parallel workers */
  workers: process.env.CI ? 2 : undefined,

  /* ✅ Reporting */
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
    // Add allure if needed
    // ['allure-playwright']
  ],

  /* ✅ Shared settings */
  use: {
    /* 🌐 Base URL from .env */
    baseURL: process.env.BASE_URL || 'https://dev.engazewell.com',

    /* ✅ Headless in CI */
    headless: process.env.CI ? true : false,

    /* 📸 Smart capture (not always ON) */
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    /* 🌍 Viewport */
    viewport: { width: 1280, height: 720 },

    /* ⏳ Action timeout */
    actionTimeout: 15000,

    /* ⏱ Navigation timeout */
    navigationTimeout: 30000,

    /* Ignore HTTPS errors if needed */
    ignoreHTTPSErrors: true
  },

  /* ✅ Multi-browser testing */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ],

  /* ✅ Output folder */
  outputDir: 'test-results/',

});
