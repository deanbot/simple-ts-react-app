const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const dev = process.env.NODE_ENV !== 'production';

// Generate HTML file that contains references to generated bundles. See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
const HTMLWebpackPluginConfig = dev
  ? new HTMLWebpackPlugin({
    template: 'src/index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true
    }
  })
  : new HTMLWebpackPlugin({
    template: 'src/index.html',
    inject: true,
    favicon: 'src/favicon.ico',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    },
  });

module.exports = {
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.json'],
  },
  devtool: dev
    ? 'cheap-module-eval-source-map'
    // more info:https://webpack.js.org/guides/development/#using-source-maps and https://webpack.js.org/configuration/devtool/
    : 'source-map',
  entry: dev
    ? [
      // must be first entry to properly set public path
      './src/webpack-public-path',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, 'src/index.tsx')
    ]
    : path.resolve(__dirname, 'src/index'),
  target: 'web',
  mode: dev ? "development" : "production",
  output: {
    path: path.resolve(__dirname, './dist'),
    // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: dev
    ? [
      // new HardSourceWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      HTMLWebpackPluginConfig,
    ]
    : [
      // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        __DEV__: false
      }),

      // Generate an external css file with a hash in the filename
      // new MiniCssExtractPlugin({
      //   filename: 'styles/vendor.[contenthash].css'
      // }),
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css'
      }),
      HTMLWebpackPluginConfig,
    ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: dev
          ? ['file-loader']
          : [
            {
              loader: 'url-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: dev
              ? {
                limit: 10000,
                mimetype: 'application/font-woff',
              }
              : {
                limit: 10000,
                mimetype: 'application/font-woff',
                name: '[name].[ext]'
              }
          }
        ]
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: dev
              ? {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  mimetype: 'application/octet-stream'
                }
              }
              : {
                limit: 10000,
                mimetype: 'application/octet-stream',
                name: '[name].[ext]'
              }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: dev
              ? {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  mimetype: 'image/svg+xml'
                }
              }
              : {
                limit: 10000,
                mimetype: 'image/svg+xml',
                name: '[name].[ext]'
              }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          ...(dev ? ['style-loader'] : [MiniCssExtractPlugin.loader]),
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => dev
                ? [
                  require('autoprefixer'),
                ]
                : [
                  require('cssnano'),
                  require('autoprefixer'),
                ],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'src', 'scss')],
              sourceMap: true
            }
          }
        ]
      }
    ],
  },
};
