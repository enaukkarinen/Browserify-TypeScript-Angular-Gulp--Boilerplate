
var gulp          = require('gulp');
var concat        = require('gulp-concat');
var gulp          = require('gulp');
var gutil         = require('gulp-util');
var argv          = require('yargs').argv;
var gulpif        = require('gulp-if');
var uglify        = require('gulp-uglify');
var rename        = require('gulp-rename');
var sourcemaps    = require('gulp-sourcemaps');

var config        = require('../config.js')();


gulp.task('vendor', ['vendor-js', 'vendor-css']);

// builds either minified or non-minified main dependency bundle in dist/.
gulp.task('vendor-js', function () {

  
  if(argv.verbose) {
    gutil.log(gutil.colors.blue('Bundling the following 3rd party js files:'));
    config.vendorscripts.forEach(function(path) { gutil.log(gutil.colors.blue(path)); });
  }
  
  return gulp.src(config.vendorscripts)
  .pipe(gulpif(!argv.min, sourcemaps.init()))
  .pipe(concat({ path:'lib.js'}))
  .pipe(gulpif(argv.min, uglify()))
  .pipe(gulpif(argv.min, rename({suffix:'.min'})))
  .pipe(gulpif(!argv.min, sourcemaps.write('.'))) 
  .pipe(gulp.dest('./dist'));
});

// builds either minified or non-minified main dependency bundle in dist/.
gulp.task('vendor-css', function () {

  
  if(argv.verbose) {
    gutil.log(gutil.colors.blue('Bundling the following 3rd css files:'));
    config.vendorstyles.forEach(function(path) { gutil.log(gutil.colors.blue(path)); });
  }
  
  return gulp.src(config.vendorstyles)
  .pipe(gulpif(!argv.min, sourcemaps.init()))
  .pipe(concat({ path:'lib.css'}))
  .pipe(gulpif(argv.min, uglify()))
  .pipe(gulpif(argv.min, rename({suffix:'.min'})))
  .pipe(gulpif(!argv.min, sourcemaps.write('.'))) 
  .pipe(gulp.dest('./dist'));
});
