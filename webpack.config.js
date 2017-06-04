const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.jsx'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'dist/bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('dist/bundle.css')

  ],

  module: {
    rules: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
       {
      test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
    },
      { 
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader'
        })
      },
      { test: /\.png$/,
        loader: 'file-loader' },
      { test: /\.(jpe?g|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?public/img/[name].[ext]'}
    ]
  }
}
