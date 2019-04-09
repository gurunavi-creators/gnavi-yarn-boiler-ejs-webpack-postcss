const webpack = require('webpack')

module.exports = {
  entry: {
    "assets/js": ['babel-polyfill', './src/js/common.js'],
    "assets/js": ['babel-polyfill', './src/js/common.js'],
  },


  output: {
    path: `${__dirname}/dist/`,
    filename: '[name]/common.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', { modules: false }],
              ],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
    }),
  ],
}
