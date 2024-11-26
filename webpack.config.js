const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node', // Specifies that we're building for Node.js
  entry: './server.js', // Your app entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Bundled file for your app
  },
  externals: [webpackNodeExternals()], // Exclude node_modules from bundling
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Ensures compatibility with older Node.js versions
          },
        },
      },
    ],
  },
  devtool: 'source-map', // Generate source maps for easier debugging
};