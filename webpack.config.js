// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MyHashWebpackPlugin = require('./buildtools/myHashWebpackPlugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  target: 'browserslist',
  watch: !isProd,
  devtool: isProd ? false : 'source-map',

  entry: './assets/js/src/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './assets/js/')
  },

  stats: { children: true },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { cacheDirectory: true }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: false, sourceMap: !isProd }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: !isProd }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass-embedded'),
              sourceMap: !isProd,
              sassOptions: { quietDeps: true }
            }
          }
        ]
      }
    ]
  },

  resolve: { extensions: ['.mjs', '.js', '.json', '.scss'] },

  plugins: [
    new MyHashWebpackPlugin({ path: '../_data/', fileName: 'hash.yml' }),
    new MiniCssExtractPlugin({ filename: '../css/style.css' })
  ]
};
