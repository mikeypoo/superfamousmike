const path = require("path");

module.exports = {
  pages: {
    main: {
      entry: "main/src/index.js",
      filename: "index.html",
    },
    bonus: {
      entry: "bonus/src/index.js",
      template: "public/for_dad.html",
      filename: "for_dad.html",
    },
  },
  configureWebpack: {
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
    },
  },
};
