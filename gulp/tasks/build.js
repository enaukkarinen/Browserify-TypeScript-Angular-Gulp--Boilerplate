
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


gulp.task('build', function() {
	var dest = argv.dev ? './dev/' : './dist/';

	return browserify('./src/app.js').bundle()
    .pipe(source('bundle.js')) // gives streaming vinyl file object
    .pipe(gulpif(argv.dev, buffer())) // <----- convert from streaming to buffered vinyl file object
    .pipe(gulpif(argv.dev, uglify())) // now gulp-uglify works 
    .pipe(gulpif(argv.dev, rename({suffix: '.min'})))
    .pipe(gulp.dest(dest));
});