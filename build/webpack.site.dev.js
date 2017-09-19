// webpack 站点开发配置
const path = require('path')
const merge = require('webpack-merge')
const siteBaseConfig = require('./webpack.site.base.js')

const resolve = function (p) {
  return path.resolve(__dirname, '../site/', p)
}

module.exports = merge(siteBaseConfig, {
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 3000
  },

  performance: {
    hints: false
  }
})
