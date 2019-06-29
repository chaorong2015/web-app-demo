const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _ = require('lodash');

const componentsDir = `${process.cwd()}/m/view/components`;
const components = fs.readdirSync(componentsDir).filter((name) => fs.statSync(`${componentsDir}/${name}`).isDirectory());
const styles = components.filter((name) => fs.existsSync(`${componentsDir}/${name}/index.scss`));
fs.writeFileSync('m/view/scss/components.scss', styles.map((name) => `@import "../view/components/${name}/index.scss";`).join('\n'));

module.exports = function (env) {
  env = env || {};

  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? '' : 'cheap-module-source-map',
    entry: ['@babel/polyfill', './m/index.tsx'],
    output: {
      filename: env.production ? 'app.min.js' : 'app.js',
      path: process.cwd() + '/www/js/',
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      mainFields: ['webpack', 'browser', 'main']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          Platform: 'h5', //平台platform
          NODE_ENV: JSON.stringify(env.production ? 'production' : 'development')
        },
        __DEVTOOLS__: !env.production,
      }),
      new MiniCssExtractPlugin({
        filename: 'app.css'
      })
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              reduce_vars: false,
              drop_debugger: true,
              warnings: false
            }
          }
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: '../'
              }
            },
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: !env.production
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !env.production
              }
            }
          ]
        },
        {
          test: /\.[tj]sx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-typescript',
                '@babel/preset-react',
                ['@babel/preset-env', {
                  targets: { ie: '11' }
                }]
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            }
          }
        }
      ]
    }
  };
};
