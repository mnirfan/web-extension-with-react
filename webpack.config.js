const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    devtoolPage: './src/devtools/index.ts',
    devtoolLoader: './src/devtools/loader.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: '/node_modules',
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}