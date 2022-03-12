/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    panel: { import: './src/devtool/panel.tsx', filename: 'devtool/[name].js' },
    devtool: { import: './src/devtool/devtool.ts', filename: 'devtool/[name].js' },
    newtab: { import: './src/newtab/newtab.tsx', filename: 'newtab/[name].js' },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/assets',
          publicPath: '/assets',
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  output: {
    publicPath: "/dist/",
  },
  optimization: {
    minimize: false,
  },
  devtool: false,
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/**/*.(html|json)',
          to: ({ context, absoluteFilename }) => {
            return absoluteFilename.replace(context, '').replace('/src/', '');
          }
        },
      ]
    }),
  ]
};
