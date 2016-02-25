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
  resolve: {
    root: __dirname + "/src"
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
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|woff2|woff|ttf|svg)$/,
        loader: "file-loader"
      }
    ]
  }
}