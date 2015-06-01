
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
var sourcemaps    = require('gulp-sourcemaps');

// builds either minified or non-minified main dependency bundle in dist/.
gulp.task('vendor', function () {

  var bowerJSON = {};
  var resolvedPaths = [];
  
  try { bowerJSON = require('../../bower.json'); } 
  catch (e) { console.log('bower.json is missing...'); }     
  
  _.keys(bowerJSON.dependencies).forEach(function (id) { 
    resolvedPaths.push(bowerResolve.fastReadSync(id));
  });
  
  if(argv.verbose) {
    gutil.log(gutil.colors.blue('Bundling the following 3rd party packages:'));
    resolvedPaths.forEach(function(path) { gutil.log(gutil.colors.blue(path)); });
  }
  
  return gulp.src(resolvedPaths)
  .pipe(gulpif(!argv.min, sourcemaps.init()))
  .pipe(concat({ path:'lib.js'}))
  .pipe(gulpif(argv.min, uglify()))
  .pipe(gulpif(argv.min, rename({suffix:'.min'})))
  .pipe(gulpif(!argv.min, sourcemaps.write('.'))) 
  .pipe(gulp.dest('./dist'));

});
