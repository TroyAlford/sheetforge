/* eslint-disable no-undef */
const path = require('path')

const PRODUCTION = process.env.NODE_ENV === 'production'
const SOURCEMAP = !PRODUCTION || process.env.SOURCEMAP

module.exports = {
  devtool: SOURCEMAP ? 'inline-source-map' : 'none',
  module: {
    rules: [{
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'source'),
    },
  },
}
/* eslint-enable no-undef */
