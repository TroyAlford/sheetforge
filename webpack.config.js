/* eslint-disable no-undef */
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageJson = require('./package.json')

const ENVIRONMENT = process.env.NODE_ENV
const PRODUCTION = ENVIRONMENT === 'production'
const SOURCEMAP = process.env.SOURCEMAP !== 'false'

const plugins = [
  new ExtractTextPlugin({ allChunks: true, filename: 'sheetforge.css' })
]
const externals = {}

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
  devtool: SOURCEMAP ? 'source-map' : 'none',
  entry: `${__dirname}/source/index.js`,
  externals: Object.keys(packageJson.peerDependencies).reduce(
    (all, key) => ({ ...all, [key]: key })
    , {}
  ),
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
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      }),
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
  stats: {
    children: false,
  },
  plugins,
}
/* eslint-enable no-undef */
