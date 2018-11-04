import merge from 'webpack-merge' // eslint-disable-line
import webpackConfig from './webpack.config.babel'

export default {
  base: '/sheetforge/',
  codeSandbox: false,
  dest: './docs',
  head: {
    meta: [{ content: 'width=device-width, initial-scale=1', name: 'viewport' }],
  },
  modifyBundlerConfig: config => merge(config, {
    ...webpackConfig,
    externals: {},
    output: {
      filename: 'sheetforge.[name].min.js',
      library: 'sheetforge',
      libraryTarget: 'umd',
      path: `${__dirname}/docs`, // eslint-disable-line no-undef
      umdNamedDefine: true,
    },
  }),
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
