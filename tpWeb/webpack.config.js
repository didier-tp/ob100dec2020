const webpack = require("webpack");
const path = require("path");
let config = {
  entry: {
	  fig : "./dist/es2015/fig-canvas.js",
	  graph : "./dist/es2015/htmlGraph.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "./[name]-bundle.js"
  }
}
module.exports = config;

//fig-bundle.js and graph-bundle.js will be generated