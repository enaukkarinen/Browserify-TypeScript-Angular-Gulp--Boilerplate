

var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');

var argv        = require('yargs').argv;
var gulpif      = require('gulp-if');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var tsify       = require('tsify');
var tslint      = require('gulp-tslint');
var exorcist    = require('exorcist');

var config = require('../config.js')();

// builds either minified or non-minified main app bundle in dist/.
gulp.task('main', ['tslint'],  function() {
	return browserify({debug: true})
    .add(config.scripts.src)
    .plugin(tsify)
    .bundle()
    .pipe(gulpif(!argv.min, exorcist('./dist/main.js.map')))  
    .pipe(source('main.js'))
    .pipe(gulpif(argv.min, buffer())) 
    .pipe(gulpif(argv.min, uglify()))
    .pipe(gulpif(argv.min, rename({suffix: '.min'})))
    .pipe(gulp.dest(config.dist));
});

