
var gulp = require('gulp');
var config = require('../config.js')();

gulp.task("js-watch", function() {
    gulp.watch('src/**/*.ts', ['build', 'lint']);
});

gulp.task('less-watch', function () {
    gulp.watch(config.less, ['less']);
});