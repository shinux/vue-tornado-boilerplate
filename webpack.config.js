var path = require('path')
var webpack = require('webpack')


module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'src/server/public/javascripts/'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        enforce: "pre",
        options: {
          formatter: require("eslint-friendly-formatter"),
        }
      },
      {
        test: /\.vue$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        enforce: "pre",
        options: {
          formatter: require("eslint-friendly-formatter"),
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2015'] }
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 8008,
  },
  devtool: 'eval-source-map',
}
