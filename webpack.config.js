/* eslint-disable no-undef */
const path = require('path')
const webpack = require('webpack')

const ENVIRONMENT = process.env.NODE_ENV
const PRODUCTION = ENVIRONMENT === 'production'
const SOURCEMAP = !PRODUCTION || process.env.SOURCEMAP

const plugins = []

if (PRODUCTION) {
  plugins.push(
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(ENVIRONMENT) }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: { comments: false, semicolons: false },
      sourceMap: SOURCEMAP,
    })
  )
}

module.exports = {
  devtool: SOURCEMAP ? 'inline-source-map' : 'none',
  entry: `${__dirname}/source/components/Sheet.js`,
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
  output: {
    filename: PRODUCTION ? 'sheetforge.min.js' : 'sheetforge.js',
    library: 'sheetforge',
    libraryTarget: 'umd',
    path: `${__dirname}/build`,
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'source/'),
    },
  },
  plugins,
}
/* eslint-enable no-undef */
