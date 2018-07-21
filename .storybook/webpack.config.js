const webpack = require('webpack')
const config = require('../webpack.config')

module.exports = {
  ...config,
  externals: {},
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.(woff2?|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000',
    }, {
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
}
