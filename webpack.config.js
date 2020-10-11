const path = require("path");
const nodeExternals = require("webpack-node-externals"); // ignoring node_modules
const HtmlWebpackPlugin = require("html-webpack-plugin"); // adding html import capabilities

module.exports = {
  mode: "none",
  target: "web",
  entry: {
    app: path.resolve(__dirname, "src", "index.tsx"),
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: path.resolve(__dirname, "node_modules"),
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
