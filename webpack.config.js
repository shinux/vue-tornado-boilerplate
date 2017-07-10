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
  //resolveLoader: {
  //  root: path.join(__dirname, 'node_modules')
  //},

  //module: {
  //  preLoaders: [
  //    {
  //      test: /\.vue$/,
  //      loader: 'eslint',
  //      exclude: /node_modules/
  //    },
  //    {
  //      test: /\.js$/,
  //      loader: 'eslint',
  //      exclude: /node_modules/
  //    }
  //  ],
  //  loaders: [
  //    {
  //      test: /\.js$/,
  //      loader: 'babel',
  //      exclude: /node_modules/,
  //      query: { presets: ['es2015'] }
  //    },
  //    {
  //      test: /\.vue$/,
  //      loader: 'vue'
  //    },
  //    {
  //      test: /\.json$/,
  //      loader: 'json'
  //    },
  //  ],
  //},
  //eslint: {
  //  formatter: require('eslint-friendly-formatter')
  //},
  //plugins: [
  //  new webpack.HotModuleReplacementPlugin()
  //],
}
