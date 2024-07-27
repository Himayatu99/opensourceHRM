const { defineConfig } = require("cypress");
// require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    }
  },
});
