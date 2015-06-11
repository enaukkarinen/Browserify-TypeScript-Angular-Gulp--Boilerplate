
var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../config.js')();

gulp.task('watch', ['ts-watch', 'less-watch', 'html-watch', 'image-watch'], function() { 
    gutil.log(gutil.colors.green('WATCHING EVERYTHING!'));
});

gulp.task("ts-watch", function() {
    gulp.watch(config.client + '**/*.ts', ['main']);
});

gulp.task("html-watch", function() {
    gulp.watch(config.client + '**/*.html', ['views']);
});

gulp.task('less-watch', function () {
    gulp.watch(config.styles.less, ['less']);
});

gulp.task('image-watch', function () {
    gulp.watch(config.images.src, ['images']);
});