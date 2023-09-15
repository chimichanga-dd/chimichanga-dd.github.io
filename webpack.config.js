const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: ["./src/index.js"],
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      {
        test: /\.(jpg|png|pdf)$/,
        type: "asset/resource"
      },
      {
        test: /\.css/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devServer: {
    contentBase: "./",
    port: 3000
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
    filename: "main.js"
  },
  devtool: "source-map"
};
