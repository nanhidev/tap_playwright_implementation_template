require('dotenv').config();
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './src/tests',

  timeout: 120000,
  expect: { timeout: 10000 },

  fullyParallel: false,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: 2,

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: process.env.BASE_URL,

    headless: process.env.CI ? true : false,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    viewport: { width: 1280, height: 720 },

    actionTimeout: 15000,
    navigationTimeout: 30000,

    ignoreHTTPSErrors: true,

    launchOptions: {
      slowMo: 0
    }
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },  
  ],

  outputDir: 'test-results/',
});
