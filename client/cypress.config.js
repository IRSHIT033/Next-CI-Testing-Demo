const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "63bwf8",
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
