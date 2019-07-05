
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/app/js/main.js',
  output:{
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'build'),
    // publicPath: 'public/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json', '*'],
  },
  devServer:{
    contentBase: './build',
    host: 'localhost',
    compress: true,
    port: 1818
  },
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "react"],
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.less?$/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.(woff|woff2|gif|jpg|jpeg|bmp|png|ttf)?$/,
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'My App',
      template: './src/temp/index.html',
      filename: 'index.html',
    }),

  ],
}  