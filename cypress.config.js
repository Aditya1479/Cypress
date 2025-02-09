const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "6r3s6o",
  reporter:"mochawesome", // Use MochaAwesome as the reporter
  reporterOptions: {
    reportDir: 'cypress/reports',  // Directory to store reports
    reportFilename: 'mocha-report', // Name of the HTML output file
    overwrite: true,  // Overwrite existing report file if it exists
    html: true,  // Generate an HTML report
    json: false,  // Disable generating JSON (we want only HTML)
    merge: true,  // Merge all spec reports into a single file
  },
  screenshotOnRunFailure: true,  // Optional: Enable screenshots on failure
  video: true,  // Optional: Enable video recording of tests

  
  e2e: {
    setupNodeEvents(on, config) {
     
      // implement node event listeners here
    },
    env:{
      "url": "https://rahulshettyacademy.com/"

  }
  

  
  },
});
