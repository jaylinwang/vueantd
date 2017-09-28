const gulp = require('gulp')
const gutil = require('gulp-util')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const webpack = require('webpack')

const devWebpackCfg = require('./build/webpack.build.js')

gulp.task('build:js', function (callback) {
  webpack(devWebpackCfg, function (err, status) {
    if (err) {
      throw new gutil.PluginError('webpack', err)
    }
    gutil.log('[webpack]', status.toString())
    callback()
  })
})

gulp.task('build:sass', function () {
  gulp.src('./components/styles/main/index.scss')
      .pipe(sass())
      .pipe(rename('vueantd.css'))
      .pipe(gulp.dest('dist/css'))
})

gulp.task('build:font', function () {
  gulp.src('./components/styles/fonts/**')
      .pipe(gulp.dest('dist/fonts'))
})

gulp.task('build', ['build:js', 'build:sass', 'build:font'])

gulp.task('default', function () {
  gulp.start('build')
  gulp.watch('./src/styles/**/*', ['build:sass'])
  gulp.watch('./src/components/**/*', ['build:js'])
})
