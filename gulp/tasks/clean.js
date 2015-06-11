
var del = require('del');
var gulp = require('gulp');
var config = require('../config.js')();
var gutil = require('gulp-util');


gulp.task('clean', function () {
	del(config.dist);
	gutil.log(gutil.colors.red('deleted dist folder.'));
});

gulp.task('clean-js', function () {
	del(config.dist + '**.*.js');
	gutil.log(gutil.colors.red('deleted all js from dist.'));
});

gulp.task('clean-assets', function () {	
	del(config.dist + 'assets/');
	gutil.log(gutil.colors.red('deleted all assets from dist.'));	
});

gulp.task('clean-styles', function () {
	del(config.dist + '**.*.css');
	gutil.log(gutil.colors.red('deleted all css from dist.'));	
});
