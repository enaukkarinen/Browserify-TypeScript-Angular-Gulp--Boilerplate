
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var config = require('../config.js')();

gulp.task('images', function() {
	
	return gulp.src(config.images.src)
	.pipe(imagemin({optimizationLevel: 4}))
	.pipe(gulp.dest(config.images.dest));
	
});