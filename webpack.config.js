const path = require("path");

module.exports = {
  entry: "./src/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "dist/scripts"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|dom7)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                  targets: {
                    ie: 11,
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
