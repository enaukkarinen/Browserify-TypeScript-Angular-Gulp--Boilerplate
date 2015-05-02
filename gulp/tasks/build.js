
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// builds either minified or non-minified bundle in dist/.
gulp.task('build', function() {
	return browserify('./src/app.js').bundle()
    .pipe(source('bundle.js'))
    .pipe(gulpif(argv.min, buffer())) 
    .pipe(gulpif(argv.min, uglify()))
    .pipe(gulpif(argv.min, rename({suffix: '.min'})))
    .pipe(gulp.dest('./dist/'));
});

