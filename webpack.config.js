/* eslint-disable no-undef */
const path = require("path");

module.exports = (env) => {
  return {
    entry: "./src/js/main.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "public/js"),
    },
    // watch: env.development ? true : false,
    watch: false,
    mode: env.development ? "development" : "production",
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: [
            path.join(__dirname, "src", "js"),
            path.join(
              __dirname,
              "node_modules",
              "@47nordmedia",
              "k2-systems-ui-library",
              "dist"
            ),
          ],
          use: "svg-inline-loader",
        },
      ],
    },
  };
};
