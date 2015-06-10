'use strict';
var gulp = require('gulp');
var changed = require('gulp-changed');

var config = require('../config')();

gulp.task('fonts', function() {

  return gulp.src(config.fonts.src)
    .pipe(changed(config.fonts.dest))
    .pipe(gulp.dest(config.fonts.dest));

});
