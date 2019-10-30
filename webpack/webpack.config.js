const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpe?g$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000 }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true //Update this to true or false
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(), removed, and replaced by `config.optimization.minimize`
    new webpack.ContextReplacementPlugin()
  ]
};
