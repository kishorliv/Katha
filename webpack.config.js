const path = require("path");
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          },

        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: [  
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },  

      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new Dotenv({
        path: "./.env.dev",
      })
  
    ]  
  };
  