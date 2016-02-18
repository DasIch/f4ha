/* global __dirname */
module.exports = {
  entry: [
    'babel-polyfill',
    __dirname + "/src/index.js"
  ],
  output: {
    path: __dirname + "/public",
    filename: "index.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
}