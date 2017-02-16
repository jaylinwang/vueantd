/**
 * ----------------------------------------------
 * webpack config for site
 * author: Jaylin Wang
 * ----------------------------------------------
 */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const markdown = require('markdown-it')({
  html: true,
  breaks: true,
});

const striptags = require('../site/utils/strip-tags');

markdown.use(require('markdown-it-container'), 'demo', {
  validate(params) {
    return params.trim().match(/^demo\s*(.*)$/);
  },
  render(tokens, idx) {
    const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
    if (tokens[idx].nesting === 1) {
      const info = (m && m.length > 1) ? m[1] : '';
      const title = info.split('::')[0];
      const tips = info.split('::')[1];

      const content = tokens[idx + 1].content;
      const template = striptags.fetch(content, 'template');
      const style = striptags.fetch(content, 'style');
      const script = striptags.fetch(content, 'script');

      const jsFiddle = markdown.utils.escapeHtml(JSON.stringify({
        html: template,
        css: style,
        js: script,
      }));
      return `<demo-block :jsfiddle="${jsFiddle}">
              <div class="demo-effect" slot="effect">${template}</div>
              <div class="demo-title" slot="title">${title}</div>
              <div slot="title">${markdown.render(tips)}</div>
              <div class="highlight" slot="code">`;
    }
    return '</div></demo-block>';
  },
});

const distRoot = path.resolve(__dirname, '../site/assets');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../site/index.js'),
  },
  output: {
    path: distRoot,
    publicPath: '/assets/',
    filename: 'js/[name].js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        loader: ['css-loader', 'sass-loader'],
      }),
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: `${distRoot}/images/[name].[ext]`,
      },
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: `${distRoot}/fonts/[name].[ext]`,
      },
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['es2015'],
      },
    }, {
      test: /\.vue/,
      loader: 'vue-loader',
      exclude: /node_modules/,
      options: {
        loaders: {
          js: 'babel-loader',
          css: 'scss-loader',
        },
        buble: {
          presets: ['es2015'],
        },
      },
    }, {
      test: /\.md/,
      loader: 'vue-markdown-loader',
      exclude: /node_modules/,
      options: markdown,
    }],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js',
    },
  },
  performance: {
    hints: false,
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
