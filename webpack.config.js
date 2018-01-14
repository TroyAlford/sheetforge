const PRODUCTION = process.env.NODE_ENV === 'production'
const SOURCEMAP = !PRODUCTION || process.env.SOURCEMAP

module.exports = {
  module: {
    rules: [{
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
}
