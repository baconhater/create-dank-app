const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

process.env.NODE_ENV = 'production';

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    // Display bundle stats
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new webpack.DefinePlugin({
      // This global makes sure React is built in prod mode.
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    // copy files into dist folder
    new CopyPlugin({
      patterns: [{ from: 'src/robots.txt', to: 'robots.txt' }],
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      minify: {
        // see https://github.com/kangax/html-minifier#options-quick-reference
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
});
