var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: true,
  target: 'electron',
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/js/main.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[chunkhash].js',
    sourceMapFilename: 'js/[name].map'
  },
  node: {
      __dirname: false
  },
  module: {
    loaders: [
      { test: /\.json?$/, loader: 'json-loader'},
      { test: /\.js$/, include: [path.resolve(__dirname, 'src')], loader: 'babel-loader', query:{presets:['es2015', 'react']}},
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less/, loader: 'style-loader!css-loader!less-loader'}
    ]
  },
  plugins: [
      //new webpack.optimize.UglifyJsPlugin({comments: false}),
  ]
}
