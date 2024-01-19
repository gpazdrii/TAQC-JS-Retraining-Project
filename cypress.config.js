const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    specPattern: 'cypress/tests/**/*.spec.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['1-getting-started', '2-advanced-examples'],
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    apiURL: 'https://gorest.co.in/',
    token: '4f8e0e40b947b82d34ae26c4bea1d9929a3bc800ec34d750db13465ae809b6b8',
    usersEndpoint: 'public/v2/users/'
  }
});
