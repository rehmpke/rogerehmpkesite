const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MyHashWebpackPlugin = require('./buildtools/myHashWebpackPlugin');
module.exports = {
  watch: true,
  entry: './assets/js/src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './assets/js/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: [/.scss$/],
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
        ]
    }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.scss']
  },
  plugins: [
    new MyHashWebpackPlugin({path: '../_data/', fileName: 'hash.yml'}),
    new MiniCssExtractPlugin({
        filename: '../css/style.css'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    })
  ]
};