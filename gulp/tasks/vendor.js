
var gulp                = require('gulp');
var concat              = require('gulp-concat');
var _             = require('lodash');
var gulp          = require('gulp');
var bowerResolve  = require('bower-resolve');
var gutil         = require('gulp-util');


gulp.task('vendor', function () {
  
  dasdasd();
  
  function dasdasd(){
    
    var bowerManifest = {};
    var resolvedPaths = [];
    try { bowerManifest = require('../../bower.json'); } 
    catch (e) { console.log('bower.json is missing...'); }    
    
    _.keys(bowerManifest.dependencies).forEach(function (id) { 
      resolvedPaths.push(bowerResolve.fastReadSync(id));
    });
    resolvedPaths.forEach(function(path) { gutil.log(path); });
    
    gulp.src(resolvedPaths)
    .pipe(concat({ path: 'lib.js'}))
    .pipe(gulp.dest('./dist'));
  }
  
});