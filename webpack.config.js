const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = {
  entry: { main: "./src/pages/index.js" },
  output: {
    publicPath: ASSET_PATH,
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        exclude: "/node_modules/",
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|gif|woff2|woff|ttf)$/,
        loader: "file-loader",
      },
      // {
      //   test: /.(png|svg|jpg|gif)$/,
      //   loader: 'file-loader?name=./images/[name].[ext]'
      // },
      // {
      //   test: /.(eot|ttf|woff|woff2)$/,
      //     loader: 'file-loader?name=./vendor/[name].[ext]',
      // },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    }),
    new MiniCssExtractPlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    }),
  ],
};
