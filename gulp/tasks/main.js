

var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');

var argv        = require('yargs').argv;
var gulpif      = require('gulp-if');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var tsify       = require('tsify');

// builds either minified or non-minified main app bundle in dist/.
gulp.task('main', function() {
	return browserify('./src/app.ts')
    .plugin(tsify, { noImplicitAny: false, module : 'amd', target: 'ES5' })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulpif(argv.min, buffer())) 
    .pipe(gulpif(argv.min, uglify()))
    .pipe(gulpif(argv.min, rename({suffix: '.min'})))
    .pipe(gulp.dest('./dist/'));
});

