'use strict';

var _             = require('lodash');
var gulp          = require('gulp');
var browserify    = require('browserify');
var source        = require('vinyl-source-stream');
var bowerResolve  = require('bower-resolve');
var gutil         = require('gulp-util');


gulp.task('vendor', function () {
  
  var b = browserify({ debug: false });
  
  getBowerPackageIds().forEach(function (id) { 
    var resolvedPath = bowerResolve.fastReadSync(id); 
    gutil.log(resolvedPath);
    b.require(resolvedPath, {expose: id});
  });
  
  var stream = b.bundle().pipe(source('lib.js'));
  stream.pipe(gulp.dest('./dist'));
  return stream;
  
  function getBowerPackageIds() {
    var bowerManifest = {};
    try { bowerManifest = require('../../bower.json'); } 
    catch (e) { console.log('bower.json is missing...'); }
    gutil.log(bowerManifest.dependencies);
    return _.keys(bowerManifest.dependencies) || [];
  }
});