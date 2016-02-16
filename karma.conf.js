var webpackConfig = require("./webpack.config.js")

webpackConfig.devtool = "inline-source-map"


module.exports = function(config) {
  config.set({
    browsers: [
      "PhantomJS"
    ],
    files: [
      "tests/*.spec.js",
      "tests/**/*.spec.js"
    ],
    frameworks: [
      "mocha",
      "chai"
    ],
    preprocessors: {
      "tests/*.spec.js": ["webpack", "sourcemap"],
      "tests/**/*.spec.js": ["webpack", "sourcemap"]
    },
    webpack: webpackConfig,
    webpackMiddleware: {
        // hides webpack output in the console
        noInfo: true
    }
  })
}