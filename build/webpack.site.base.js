// webpack 站点基础配置
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const hljs = require('highlight.js')

const markdown = require('markdown-it')({
  html: true,
  breaks: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code class="hljs-code">' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>'
      } catch (__) {}
    }
    return '<pre class="hljs"><code>' + markdown.utils.escapeHtml(str) + '</code></pre>'
  }
})

markdown.use(require('markdown-it-container'), 'demo', {
  validate (params) {
    return params.trim().match(/^demo$/)
  },
  render (tokens, index) {
    if (tokens[index].nesting === 1) { // 标签开始
      let content = tokens[index + 1].content
      return `
        <demo-block code="${markdown.utils.escapeHtml(content)}">
          <div slot="display">${content}</div>
      `
    } else {
      return `</demo-block>`
    }
  }
})

const resolve = function (p) {
  return path.resolve(__dirname, '../site/', p)
}

module.exports = {
  entry: {
    index: resolve('pages/index.js')
  },

  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'js/[name].[chunkhash:7].js'
  },

  module: {
    rules: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: ['css-loader']
      })
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.(png|jpe?g|gif)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'images/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }, {
      test: /\.md$/,
      loader: 'vue-markdown-loader',
      options: Object.assign(markdown, {
        wrapper: 'article'
      })
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
      docs: path.resolve(__dirname, '../docs'),
      site: path.resolve(__dirname, '../site'),
      components: path.resolve(__dirname, '../components')
    }
  },

  plugins: [
    new ExtractTextPlugin('css/[name].[chunkhash:7].css'),
    new HtmlWebpackPlugin({
      template: resolve('template/default.html'),
      filename: 'index.html',
      inject: true,
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
}
