
var gulp          = require('gulp');
var concat        = require('gulp-concat');
var _             = require('lodash');
var gulp          = require('gulp');
var bowerResolve  = require('bower-resolve');
var gutil         = require('gulp-util');

var argv          = require('yargs').argv;
var gulpif        = require('gulp-if');
var uglify        = require('gulp-uglify');
var rename        = require('gulp-rename');

// builds either minified or non-minified main dependency bundle in dist/.
gulp.task('vendor', function () {
  
  dasdasd();
  
  function dasdasd(){
    
    var bowerJSON = {};
    var resolvedPaths = [];
    try { bowerJSON = require('../../bower.json'); } 
    catch (e) { console.log('bower.json is missing...'); }    
    
    _.keys(bowerJSON.dependencies).forEach(function (id) { 
      resolvedPaths.push(bowerResolve.fastReadSync(id));
    });
    resolvedPaths.forEach(function(path) { gutil.log(path); });
    
    gulp.src(resolvedPaths)
    .pipe(concat({ path: 'lib.js'}))
    .pipe(gulpif(argv.min, uglify()))
    .pipe(gulpif(argv.min, rename({suffix: '.min'})))
    .pipe(gulp.dest('./dist'));
  }
  
});