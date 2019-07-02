const fs = require('fs');
const Path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const globals = require('./globals.json');

const componentsDir = `${process.cwd()}/m/components`;
const components = fs.readdirSync(componentsDir).filter((name) => fs.statSync(`${componentsDir}/${name}`).isDirectory());

const source = `const C=window.C={};${components.map((name) => `C['${name}']=require('../m/components/${name}').default;`).join('\n')}`;
fs.writeFileSync('runtime/components.js', source);

const componentsMetas = {
  globals,
  components: {}
};

// components.forEach((name) => {
//   let json = JSON.parse(fs.readFileSync(`${componentsDir}/${name}/package.json`, 'utf8'));
//   if (json.props) {
//     componentsMetas.components[name] = {
//       component: name,
//       title: json.title || name,
//       props: json.props,
//       private: json.private,
//       tags: json.tags,
//     };
//   }
// });
// fs.writeFileSync(`settings/m.json`, JSON.stringify(componentsMetas, null, 2));

module.exports = function (env) {
  env = env || {};

  const plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env.production ? 'production' : 'development')
      },
      __DEVTOOLS__: !env.production,
    })
  ];

  if (!env.production) {
    plugins.push({
      apply(compiler) {
        compiler.plugin('watchRun', function () {
          console.log('\u001bc');
        });
      }
    });
  }

  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? '' : 'cheap-module-source-map',
    entry: ['regenerator-runtime/runtime', './runtime/components.js'],
    output: {
      filename: env.production ? 'components.min.js' : 'components.js',
      path: `${process.cwd()}/www/js`,
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      mainFields: ['webpack', 'browser', 'main']
    },
    externals: [function (context, request, callback) {
      let matchs = request.match(/lodash\/(.+)/);
      if (matchs) {
        callback(null, `var _.${matchs[1]}`);
        return;
      }
      let index = globals.libs.indexOf(request) + 1;
      if (index) {
        callback(null, `var G[${index}]`);
        return;
      }

      if (request[0] !== '.') {
        console.log(context, request);
      }

      if (request[0] === '.') {
        let target = Path.join(context, request);
        let relative = Path.relative(componentsDir, target);
        if (relative[0] === '.' && request !== './runtime/components.js') {
          console.log(context, request);
          throw new Error('components 目录不能引用其他目录中的文件');
        }
      } else {
        console.log(context, request);
      }
      callback();
    }],
    plugins,
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              reduce_vars: false,
              drop_debugger: true
            }
          }
        })
      ]
    },
    module: {
      rules: [
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

