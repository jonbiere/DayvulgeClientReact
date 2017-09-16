var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    // activate HMR for React
    'react-hot-loader/patch',
    
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:3000',
    
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',
   
     // the entry point of our app
    './app/root.jsx',
   
  ],

  output: {
    filename: 'bundle.js',
    // the output bundle
    path: path.resolve(__dirname, 'public'),
    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
