
var gulp = require('gulp');
var tslint = require('gulp-tslint');
 var config = require('../config.js')();
 
gulp.task('tslint', function(){
      gulp.src(config.allts)
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});