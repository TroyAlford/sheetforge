/* eslint-disable no-undef */
import path from 'path'
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin'
import fiber from 'fibers'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import sass from 'sass'
import webpack from 'webpack'
import packageJson from './package'

const ENVIRONMENT = process.env.NODE_ENV || 'development'
const PRODUCTION = ENVIRONMENT === 'production'

const CONFIG = {
  devtool: 'source-map',
  entry: {
    [ENVIRONMENT]: `${__dirname}/source/index.js`,
  },
  externals: PRODUCTION
    ? Object.keys(packageJson.peerDependencies).reduce((all, key) => ({ ...all, [key]: key }), {})
    : {},
  mode: ENVIRONMENT,
  module: {
    rules: [
      /* eslint-disable sort-keys */
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
      /* eslint-enable sort-keys */
    ],
  },
  optimization: {
    minimize: PRODUCTION,
    splitChunks: PRODUCTION ? {} : {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          enforce: true,
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
        },
      },
      chunks: 'async',
    },
  },
  output: {
    filename: PRODUCTION ? 'sheetforge.[name].min.js' : 'sheetforge.[name].js',
    library: 'sheetforge',
    libraryTarget: 'umd',
    path: `${__dirname}/build`,
    umdNamedDefine: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({ chunkFilename: 'sheetforge.[name].css', filename: 'sheetforge.[name].css' }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(ENVIRONMENT) }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, '/source/'),
      '@fontello': path.join(__dirname, '/fontello/'),
    },
    extensions: ['.css', '.js', '.scss'],
    modules: ['node_modules'],
    plugins: [new DirectoryNamedWebpackPlugin()],
  },
  stats: {
    children: false,
  },
}

export default CONFIG
