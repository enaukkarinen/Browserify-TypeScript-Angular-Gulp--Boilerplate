'use strict';

var gulp 		      = require('gulp');
var gutil         = require('gulp-util');
var less 		      = require('gulp-less');
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('gulp-autoprefixer');
var config 		    = require('../config.js')();
var concat        = require('gulp-concat');
var plumber       = require('gulp-plumber');

gulp.task('less', function () {
  
  return gulp
    .src(config.styles.less)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer({ map: true })) 
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist));
});