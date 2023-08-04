const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  fixturesFolder: 'cypress/fixtures',
  retries: 0,
  defaultCommandTimeout: 10000,
  video: false,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  env: {
    env: 'https://www-staging.urbansportsclub.com',
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/features/**/*.feature',
    supportFile: false,
  },
})
