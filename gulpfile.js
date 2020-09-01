const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')

gulp.task('default', () => {
  const postcss = require('gulp-postcss')

  return gulp.src('scss/*.scss')
    .pipe( sass() )
    .pipe( postcss() )
    .pipe( cleanCSS() )
    .pipe( gulp.dest('dist') )
})
