const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    panel: { import: './src/devtool/panel.tsx', filename: 'devtool/[name].js' },
    devtool: { import: './src/devtool/devtool.ts', filename: 'devtool/[name].js' },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: '/node_modules',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
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
          from: 'src/**/*.(html|json|png)',
          to: ({ context, absoluteFilename }) => {
            return absoluteFilename.replace(context, '').replace('/src/', '');
          }
        },
      ]
    }),
  ]
};
