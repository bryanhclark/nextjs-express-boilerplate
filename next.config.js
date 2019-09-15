require('dotenv').config();
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  distDir: '../build',
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
  publicRuntimeConfig: {
    protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
  },
});
