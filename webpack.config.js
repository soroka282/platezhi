const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  devtool: 'source-map',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build/js'),

  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }
    ]
  }
};
