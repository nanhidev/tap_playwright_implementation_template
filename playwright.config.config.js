// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,

  retries: 1, // retry failed tests

  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure', // 🔥 very important
  },

  reporter: [
    ['list'], // console output
    ['html', { open: 'never' }], // HTML report
    ['json', { outputFile: 'test-results/results.json' }], // for API usage
  ],
});