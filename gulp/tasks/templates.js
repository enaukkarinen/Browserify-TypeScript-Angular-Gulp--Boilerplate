
var gulp 			= require('gulp');
var templateCache 	= require('gulp-angular-templatecache');
var minifyHtml		= require('gulp-minify-html');
var config 			= require('../config.js')();
var rename          = require("gulp-rename");


gulp.task('templates', function () { //, ['clean-templates']
    
    gulp.src('./src/index.html')
    .pipe(gulp.dest(config.build));
    
    return gulp
    .src(config.templateCache.html)
    .pipe(minifyHtml({empty: true}))
    .pipe(templateCache(
    	config.templateCache.file, 
    	config.templateCache.options
	))
    .pipe(rename({ extname: '.ts'}))
    .pipe(gulp.dest(config.templateCache.dest));
    
});