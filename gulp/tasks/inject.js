var gulp = require('gulp');
var inject = require('gulp-inject');
 
 // this task builds the bundle.js and links it in the index.html.
gulp.task('inject', function () {

  	var target = gulp.src('./dist/index.html');

  	return target.pipe(
		  inject(gulp.src(['./dist/*.js', './src/**/*.css'], {read: false, ignorePath: 'dist'})))
  	.pipe(gulp.dest('./dist'));
});