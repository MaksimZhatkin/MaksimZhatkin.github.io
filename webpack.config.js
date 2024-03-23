/* eslint-disable no-undef */
const path = require('path')

const { ProgressPlugin } = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env) => {
  const isDev = env.mode === 'development'
  const isProd = env.mode === 'production'

  return {
    // Configuration

    mode: env.mode ?? 'development',
    devtool: isDev ? 'eval' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'scripts', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true
    },

    // Pugins

    plugins: [
      isDev && new ProgressPlugin(),
      new HtmlPlugin({
        template: path.resolve(__dirname, 'src', 'index.html')
      }),
      isProd &&
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css'
        }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src', 'img'),
            to: path.resolve(__dirname, 'dist', 'img')
          }
        ]
      })
    ].filter(Boolean),

    // Modules

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'postcss-preset-env',
                      {
                        browsers: [
                          'last 2 versions',
                          'Firefox ESR',
                          'not OperaMini All',
                          'not dead'
                        ]
                      }
                    ],
                    ['autoprefixer', {}]
                  ]
                }
              }
            }
          ]
        },
        {
          test: /\.m?js$/,
          include: path.resolve(__dirname, 'src', 'scripts'),
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },

    // Optimization

    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin({})]
    },

    // Server

    devServer: {
      port: 3000,
      open: true
    },

    // Performance

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  }
}
