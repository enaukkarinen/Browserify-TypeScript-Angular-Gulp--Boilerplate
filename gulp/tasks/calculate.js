'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var calc = require('../../node_modules/calcModule.js');


gulp.task('calculate', function (){

  gutil.log(__filename);
  var n1 = calc.plus(3, 76);
  gutil.log('	myModule.add(3, 76) = ' + n1);
  var n2 = calc.minus(3, 76);
  gutil.log('	myModule.minus(3, 76) = ' + n2);
});

gulp.task('default', function() {
  console.log('gulp default task!');
});
