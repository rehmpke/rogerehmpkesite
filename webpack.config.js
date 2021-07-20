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
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // Cache the babel compilation // Cached files are stored & gzipped in `/node_modules/.cache/babel-loader/`
            // Set a custom `cacheIdentifier: '<my_custom_cache_identifier>',` SHOULD you need to manually bust the babel-loader cache.
          },
        },
      },
      {
        test: [/.scss$/],
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {  // Do not let css-loader resolve `url()`s
              url: false, // Will throw errors when trying to resolve url() for local assets if set to default (true)
            },
          },
          'postcss-loader',
          'sass-loader',
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
