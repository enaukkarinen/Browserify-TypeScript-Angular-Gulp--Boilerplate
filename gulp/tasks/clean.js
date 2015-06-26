
var del = require('del');
var gulp = require('gulp');
var config = require('../config.js')();
var gutil = require('gulp-util');


gulp.task('clean', function () {
	del(config.build);
	gutil.log(gutil.colors.red('deleted build folder.'));
});

gulp.task('clean-js', function () {
	del(config.build + '**.*.js');
	del(config.build + '**.*.js.map');
	gutil.log(gutil.colors.red('deleted javascript & source-maps from build folder.'));
});

gulp.task('clean-assets', function () {	
	del(config.build + 'assets/');
	gutil.log(gutil.colors.red('deleted all assets from dist.'));	
});

gulp.task('clean-styles', function () {
	del(config.build + '**.*.css');
	gutil.log(gutil.colors.red('deleted all css from dist.'));	
});

gulp.task('clean-templates', function () {
	del('./src/templates.ts');
	gutil.log(gutil.colors.red('deleted templates.ts'));	
});
