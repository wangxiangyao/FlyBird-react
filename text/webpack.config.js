var path = require("path");

module.exports = {
  entry: path.join(__dirname, "app/main.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build")
  }
};
