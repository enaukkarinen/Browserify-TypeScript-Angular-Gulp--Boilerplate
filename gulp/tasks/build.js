
var gulp = require('gulp');
var util = require('gulp-util');

gulp.task('build', ['main', 'vendor', 'less', 'images', 'fonts'], function () {
	
	util.log(util.colors.green('Build finished.'));
	
});

