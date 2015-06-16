
var gulp 			= require('gulp');
var templateCache 	= require('gulp-angular-templatecache');
var minifyHtml		= require('gulp-minify-html');
var config 			= require('../config.js')();
var rename          = require("gulp-rename");


gulp.task('templates', ['clean-templates'], function () {
    return gulp
    .src(config.htmlTemplates)
    .pipe(minifyHtml({empty: true}))
    .pipe(templateCache(
    	config.templateCache.file, 
    	config.templateCache.options
	))
    .pipe(rename({ extname: '.ts'}))
    .pipe(gulp.dest('./src/client/'));
        
});