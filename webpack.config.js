const path = require('path');
const webpack = require('webpack');




module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.jsx'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    rules: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      include: path.join(__dirname, 'src')
        
      },
       {
      test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
        
    },
      { 
        test: /\.scss?$/,
         loader: 'style-loader!css-loader!sass-loader',
        include: path.join(__dirname, 'src', 'styles')
      },
      { test: /\.png$/,
        loader: 'file-loader' },
      { test: /\.(jpe?g|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?public/img/[name].[ext]'}
    ]
  }
}
