const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = (env, options) => {
  return {
    mode: "production",
    entry: {
      main: "./src",
      sdk: "./games-sdk.js",
    },

    output: {
      publicPath: "/dist/",
    },

    plugins: [
      new NodePolyfillPlugin()
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
  };
};
