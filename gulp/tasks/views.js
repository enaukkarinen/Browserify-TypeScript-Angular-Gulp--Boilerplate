
var gulp = require('gulp');
var refresh = require('gulp-livereload');
var lrserver = require('tiny-lr')();

gulp.task('views', function() {
  gulp.src('./src/index.html')
  .pipe(gulp.dest('dist/'));

  gulp.src('./src/views/**/*')
  .pipe(gulp.dest('dist/views/'))
  .pipe(refresh(lrserver)); // Tell the lrserver to refresh
});