import merge from 'webpack-merge' // eslint-disable-line
import webpackConfig from './webpack.config'

export default {
  dest: './docs',
  modifyBundlerConfig: config => merge(
    config,
    webpackConfig,
  ),
  src: './source',
  themeConfig: {
    styles: {
      body: {
        fontFamily: 'Ubuntu',
      },
      h2: {
        '&:before': {
          display: 'none',
        },
        display: 'flex',
        fontWeight: 'bold',
      },
    },
  },
  title: 'Sheetforge Documentation',
}
