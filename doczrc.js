import merge from 'webpack-merge' // eslint-disable-line
import webpackConfig from './webpack.config'

export default {
  dest: './docs',
  modifyBundlerConfig: config => merge(
    config,
    webpackConfig,
  ),
  src: './source',
  title: 'Sheetforge Documentation',
}
