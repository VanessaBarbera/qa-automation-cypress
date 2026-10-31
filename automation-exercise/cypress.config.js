const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 12000,
  pageLoadTimeout: 60000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  retries: { runMode: 1, openMode: 0 },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
    quiet: true,
  },
  e2e: {
    baseUrl: 'https://automationexercise.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    testIsolation: true,
  },
});
