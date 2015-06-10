
var gulp = require('gulp');
var refresh = require('gulp-livereload');
var lrserver = require('tiny-lr')();

gulp.task('views', function() {
  gulp.src('./src/client/index.html')
  .pipe(gulp.dest('dist/'));

  gulp.src('./src/client/features/**/*.html')
  .pipe(gulp.dest('dist/features/'));

});