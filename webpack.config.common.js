const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'web',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  'ant-theme-file': `; @import '${path.resolve(
                    __dirname,
                    './src/theme/theme.less'
                  )}'`,
                },
                javascriptEnabled: true,
                strictMath: false,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, './src/assets'),
      Core: path.resolve(__dirname, './src/core/'),
      Layout: path.resolve(__dirname, './src/core/layout'),
      Private: path.resolve(__dirname, './src/private'),
      Public: path.resolve(__dirname, './src/public'),
      Shared: path.resolve(__dirname, './src/shared'),
      Store: path.resolve(__dirname, './src/store'),
      Theme: path.resolve(__dirname, './src/theme'),
      Mock: path.resolve(__dirname, './src/mock'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
