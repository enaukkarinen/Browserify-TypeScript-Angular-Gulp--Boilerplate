
var del = require('del');
var gulp = require('gulp');
var config = require('../config.js')();
var gutil = require('gulp-util');

gulp.task('clean', function(){
		
	del(config.dist);
	gutil.log(gutil.colors.green('deleted ./dist folder.'));
	
});