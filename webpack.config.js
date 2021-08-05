const path = require('path');
const HTMPWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devServer: {
    port: 3001,
    open: true
  },
  context: path.resolve(__dirname, 'src'),
  entry: "./index.js",
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: [".js", '.css', '.jsx', '.cjs']
  },
  plugins: [
    new HTMPWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpe?g)$/i,
        use: ['file-loader']
      },
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  }
}