const gulp          = require('gulp');
const browserify    = require('browserify');
const babelify      = require('babelify');
const source        = require('vinyl-source-stream');
const chalk         = require('chalk');

const ENTRY_FILE    = './index.js';

function error(s) {
  console.log(chalk.bold.red(s));
}

function info(s) {
  console.log(chalk.bold.green(s));
}

gulp.task('build', function () {
  info('♺ rebuilding ...');
  return browserify(ENTRY_FILE, { debug: true })
          .transform(babelify)
          .bundle()
          .on('error', function (err) { error(err); })
          .pipe(source('bundle.js'))
          .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch('*.js', ['build']);
});

gulp.task('default', ['watch']);
