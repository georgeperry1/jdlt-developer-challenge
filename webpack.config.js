const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, "dist");

const config = {
  entry: ['babel-polyfill', './src/app/index.js'],
  output: {
    path: DIST_DIR + '/app/',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-2']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      },
    ]
  }
}

module.exports = config;
