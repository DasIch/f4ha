var webpackConfig = require("./webpack.config.js")

webpackConfig.devtool = "inline-source-map"

// Workaround for a enzyme + sinon + webpack bug
// https://github.com/airbnb/enzyme/issues/47
webpackConfig.module.noParse = [
  /node_modules\/sinon\//
]
webpackConfig.resolve.alias = {
  sinon: "sinon/pkg/sinon"
}
webpackConfig.externals = {
  jsdom: "window",
  "react/lib/ExecutionEnvironment": true,
  "react/lib/ReactContext": "window",
  "text-encoding": "window"
}
webpackConfig.module.loaders = webpackConfig.module.loaders.concat(
  {
    test: /\.json$/,
    loader: "json"
  }
)

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