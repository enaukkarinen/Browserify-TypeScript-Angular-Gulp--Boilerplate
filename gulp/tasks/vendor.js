'use strict';

var _ = require('lodash');
var fs = require('fs');
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var bowerResolve = require('bower-resolve');
//var nodeResolve = require('resolve');


gulp.task('vendor', function () {
  
  var b = browserify({ debug: false });
  
  getBowerPackageIds().forEach(function (id) { 
    var resolvedPath = bowerResolve.fastReadSync(id); 
    b.require(resolvedPath, {expose: id});
  });
  
  var stream = b.bundle().pipe(source('vendor.js'));
  stream.pipe(gulp.dest('./dist'));
  return stream;
  
  function getBowerPackageIds() {
    var bowerManifest = {};
    try { bowerManifest = require('../../bower.json'); } 
    catch (e) { console.log('bower.json is missing...'); }
    console.log(bowerManifest.dependencies);
    return _.keys(bowerManifest.dependencies) || [];
  }
});