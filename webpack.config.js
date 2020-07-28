const path = require("path");
const webpack = require("webpack");

// prod setup for webpack: https://webpack.js.org/guides/production/
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        // https://webpack.js.org/loaders/sass-loader/
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              // https://webpack.js.org/loaders/sass-loader/#additionaldata
              additionalData: '@import "default";',
              sassOptions: {
                includePaths:[path.resolve(__dirname, 'src/components/')],
              },
            },
          },
        ],
      },
      {
        // https://webpack.js.org/loaders/file-loader/
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  // clean /dist with clean-webpack-plugin
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
