var webpack = require('webpack');

module.exports = {
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  }
}
