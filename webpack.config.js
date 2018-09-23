/* eslint-disable no-undef */
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const fiber = require('fibers')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const sass = require('sass')
const webpack = require('webpack')
const packageJson = require('./package.json')

const ENVIRONMENT = process.env.NODE_ENV || 'development'
const PRODUCTION = ENVIRONMENT === 'production'

module.exports = {
  devtool: 'source-map',
  entry: `${__dirname}/source/index.js`,
  externals: Object.keys(packageJson.peerDependencies).reduce(
    (all, key) => ({ ...all, [key]: key }),
    {}
  ),
  mode: ENVIRONMENT,
  module: {
    rules: [
      { test: /\.(woff2?|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          { loader: 'sass-loader', options: { fiber, implementation: sass } },
        ],
      },
    ],
  },
  optimization: {
    minimize: PRODUCTION,
    splitChunks: {
      // cacheGroups: {
      //   vendor: {
      //     chunks: 'initial',
      //     enforce: true,
      //     name: 'vendor',
      //     test: /[\\/]node_modules[\\/]/,
      //   },
      // },
      chunks: 'async',
    },
  },
  output: {
    filename: PRODUCTION ? 'sheetforge.min.js' : 'sheetforge.js',
    library: 'sheetforge',
    libraryTarget: 'umd',
    path: `${__dirname}/build`,
    umdNamedDefine: true,
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({ filename: 'sheetforge.css' }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(ENVIRONMENT) }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }),
  ],
  resolve: {
    alias: {
      '@': `${__dirname}/source/`,
    },
    extensions: ['.css', '.js', '.scss'],
    modules: ['node_modules'],
    plugins: [new DirectoryNamedWebpackPlugin()],
  },
  stats: {
    children: false,
  },
}
