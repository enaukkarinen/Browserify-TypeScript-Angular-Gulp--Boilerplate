
var gulp = require('gulp');
var util = require('gulp-util');

gulp.task('build', ['app', 'vendor', 'views', 'less'], function () {
	
	util.log(util.colors.green('Build finished.'));
	
});

