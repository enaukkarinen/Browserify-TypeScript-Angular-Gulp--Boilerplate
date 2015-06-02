
var gulp = require('gulp');
var config = require('../config.js')();

gulp.task('watch', ['js-watch', 'less-watch']);

gulp.task("js-watch", function() {
    gulp.watch(config.allts, ['app']);
});

gulp.task('less-watch', function () {
    gulp.watch(config.less, ['less']);
});