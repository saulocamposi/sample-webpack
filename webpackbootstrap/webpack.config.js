const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {

  entry: [
    'webpack-hot-middleware/client',
    'tether',
    'font-awesome-loader',
    'bootstrap-loader',
    './app/scripts/app',
  ],

  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: 'app.js',
    publicPath: '/assets/',
  },

devtool: '#cheap-module-eval-source-map',

resolve: { extensions: [ '', '.js' ] },

plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      "window.Tether": "tether"
    }),
  ],


  module: {
      loaders: [
        { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
        { test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] },
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url?limit=10000"
        },
        {
          test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
          loader: 'file'
        },


        // Bootstrap 3
        { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
      ],
    },

    postcss: [ autoprefixer ],


};
