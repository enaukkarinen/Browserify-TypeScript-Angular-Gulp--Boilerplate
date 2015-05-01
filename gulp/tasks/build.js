
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


gulp.task('build', function() {

	return browserify('./src/app.js').bundle()
    .pipe(source('bundle.js')) // gives streaming vinyl file object
    .pipe(gulpif(argv.min, buffer())) // <----- convert from streaming to buffered vinyl file object
    .pipe(gulpif(argv.min, uglify())) // now gulp-uglify works 
    .pipe(gulpif(argv.min, rename({suffix: '.min'})))
    .pipe(gulp.dest('./dist/'));
});

