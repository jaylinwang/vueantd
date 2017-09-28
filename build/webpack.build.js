// webpack 开发配置
const path = require('path')
const distRoot = path.resolve(__dirname, '../dist')
const resolve = function (p) {
  return path.resolve(__dirname, '../components/', p)
}

module.exports = {
  entry: {
    vueantd: resolve('index.js')
  },

  output: {
    path: distRoot,
    filename: '[name].js',
    library: 'vueantd',
    libraryTarget: 'umd'
  },

  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }, {
      test: /\.vue/,
      loader: 'vue-loader',
      exclude: /node_modules/,
      options: {
        loaders: {
          js: 'babel-loader'
        },
        buble: {
          presets: ['es2015']
        }
      }
    }]
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      components: path.resolve(__dirname, '../components')
    }
  },

  performance: {
    hints: false
  }
}
