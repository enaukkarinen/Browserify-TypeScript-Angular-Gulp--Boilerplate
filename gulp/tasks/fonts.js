'use strict';
var gulp = require('gulp');
var changed = require('gulp-changed');
var gutil = require('gulp-util');
var config = require('../config')();

gulp.task('fonts', function() {
  
  gutil.log(gutil.colors.green("Moving fonts to build folder"));
  
  gulp.src(config.fonts.src)
      .pipe(changed(config.fonts.dest))
      .pipe(gulp.dest(config.fonts.dest));
      
  gulp.src(config.fonts.vendor)
    .pipe(changed(config.fonts.dest))
    .pipe(gulp.dest(config.fonts.dest));

});
