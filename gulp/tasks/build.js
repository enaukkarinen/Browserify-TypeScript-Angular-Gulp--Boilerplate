
var gulp = require('gulp');
var util = require('gulp-util');

gulp.task('build', ['main', 'vendor', 'views', 'less', 'images'], function () {
	
	util.log(util.colors.green('Build finished.'));
	
});

