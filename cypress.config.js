const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.stats.failures === 0 && results.video) {
          // `del()` returns a promise, so it's important to return it to ensure
          // deleting the video is finished before moving on
          return del(results.video)
        }
      })
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

  on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    baseUrl: "https://www.zoopla.co.uk/",
    specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false,
    waitForAnimations: false,
    animationDistanceThreshold: 50,
  },
});
