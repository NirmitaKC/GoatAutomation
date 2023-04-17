const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 19997,
  responseTimeout: 60042,
  videoUploadOnPasses: false,
  viewportWidth: 1200,
  viewportHeight: 1200,

  env : {
    ADMIN_USERNAME: "admin@admin.com",
    ADMIN_PASSWORD: "#t3k@d2021*",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
