const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './src/tests',
  timeout: 60000, // Increase timeout as the app seems slow

  retries: 0,

  use: {
    headless: false, // Set to true if you don't want to see the browser window
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
});
