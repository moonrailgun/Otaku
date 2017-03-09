var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: true,
  target: 'electron',
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    sourceMapFilename: '[name].map'
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
      new webpack.optimize.UglifyJsPlugin({comments: false}),
  ]
}
