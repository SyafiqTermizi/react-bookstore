var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: {
    main: './static/js/index.js',
    book: './static/js/components/books/index.jsx',
    author: './static/js/components/authors/index.jsx',
    main_css: './static/scss/index.scss'
  },
  output: {
      path: path.resolve('./static/bundles/'),
      filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
            // fallback to style-loader in development
            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ]
}
