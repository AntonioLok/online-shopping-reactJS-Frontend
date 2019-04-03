const gulp = require('gulp');
const eslint = require('gulp-eslint');
const sassLint = require('gulp-sass-lint');

gulp.task('eslint', () => gulp.src(['./src/**/*.js', './tests/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format(''))
  .pipe(eslint.failAfterError()));

gulp.task('sass-lint', () => gulp.src(['./src/stylesheets/**/*.s+(a|c)ss'])
  .pipe(sassLint({
    configFile: './.sass-lint.yaml',
  }))
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError()));
