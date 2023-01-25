const { defineConfig } = require("cypress");

module.exports = {
  projectId: "63bwf8",
};

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    e2e: {
      baseUrl: "http://localhost:3000",
    },
  },
});
