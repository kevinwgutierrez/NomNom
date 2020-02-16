var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");
var merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var NpmInstallPlugin = require("npm-install-webpack-plugin");
var autoprefixer = require("autoprefixer");
var webpack = require("webpack");
var merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var NpmInstallPlugin = require("npm-install-webpack-plugin");
var autoprefixer = require("autoprefixer");

const TARGET = process.env.npm_lifecycle_event;
console.log("target event is " + TARGET);

module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.jsx`,
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: ["babel-loader?presets[]=es2015&presets[]=react"],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "postcss", "sass"]
      },
      {
        test: /\.less$/,
        loaders: ["style", "css", "less"]
      },
      {
        test: /\.woff$/,
        loader:
          "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
      },
      {
        test: /\.woff2$/,
        loader:
          "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
      },
      {
        test: /\.(eot|ttf|svg|gif|png)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  postcss: function() {
    return [
      autoprefixer({
        browsers: ["last 3 versions"]
      })
    ];
  }
};
if (TARGET === "dev" || !TARGET) {
  module.exports = merge(common, {
    devtool: "eval-source-map",
    devServer: {
      historyApiFallback: true
    },
    output: {
      publicPath: "http://localhost:8090/assets"
    },
    plugins: [
      new NpmInstallPlugin({
        save: true // --save
      })
    ]
  });
}

if (TARGET === "build") {
  module.exports = merge(common, {
    devtool: "source-map",
    output: {
      path: "./dist"
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack-react",
        template: "index-template.ejs"
      })
    ]
  });
}
