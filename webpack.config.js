const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.join(__dirname, './dist');
const APP_DIR = path.join(__dirname, './src');

// get the node env used to run the script with, and set to development if undefined
const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const plugins = [
  new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
  }),
  new webpack.ProvidePlugin({
    fetch: 'exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd',
  }),
  new HtmlWebpackPlugin({
    inject: false,
    filename: 'index.html',
    template: require('html-webpack-template'),
    appMountId: 'root-container',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        content: 'ie=edge',
        'http-equiv': 'x-ua-compatible',
      },
      {
        content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
        name: 'viewport',
      },
      {
        content: 'Content-Type',
        name: 'http-equiv',
      },
      {
        content: 'text/html; charset=UTF-8',
        name: 'content',
      },
      {
        property: 'og:title',
        content: 'aug_r',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:description',
        content: 'aug_r is the number one marketplace for augmented reality content',
      },
      {
        name: 'theme-color',
        content: '#009fc1',
      },
    ],
    mobile: false,
    lang: 'en-US',
    links: [
      'https://fonts.googleapis.com/icon?family=Material+Icons',
      '/materialize.css',
    ],
    title: 'aug_r',
  }),
];

// Common rules
const rules = [
  {
    test: /\b(?!global\.)(\w+(?:-\w+)*)(?=\.css\b)/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    }),
  },
  {
    test: /\.global\.css$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader',
    }),
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.svg$/,
    loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]',
  },
  {
    test: /\.gif$/,
    loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]',
  },
  {
    test: /\.jpg$/,
    loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]',
  },
  {
    test: /\.png$/,
    loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]',
  },
  {
    test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader?name=/fonts/[name].[ext]',
  },
  {
    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=100&mimetype=application/font-woff&name=/fonts/[name].[ext]',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=100&mimetype=application/octet-stream&name=/fonts/[name].[ext]',
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader?name=/fonts/[name].[ext]',
  },
];

module.exports = {
  context: APP_DIR,
  entry: './index.js',
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.json'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      APP_DIR,
    ],
  },
  plugins,
};
