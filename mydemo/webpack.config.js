const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry:  [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './app/main.js'
  ],
  output: {
    path: resolve(__dirname, 'build'),//打包后的文件存放的地方
    filename: "bundle.js",//打包后输出文件的文件名
    publicPath: "/"
  },
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    hot: true,
    publicPath:'/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: "cheap-eval-source-map",
};
