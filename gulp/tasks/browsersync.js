

var gulp = require('gulp');
var config = require('../config.js')();

gulp.task('browsersync', function(){
	

    var options = {
      proxy: 'localhost:' + this.port,
      port: 3000,
      files: ['./src/**/*.*'],
      ghostMode: {
        clicks: true,
        locations: false,
        forms: true,
        scrolls: true      
      },
	  injectChanges: false,
	  logFileChanges: true,
	  logLevel: 'debug',
	  logPrefix: 'gulp-patterns',
	  notify: true,
	  reloadDelay: 1000
    };
});