

var gulp = require('gulp');
var config = require('../config.js')();
var browserSync = require('browser-sync');

gulp.task('browsersync', function(){
	
  if(browserSync.isActive){
    return;
  }
  var port = process.env.PORT || config.defaultport;
  console.log('portti on ' + port);
  var options = {
      proxy: 'localhost:' + port,
      port: 3000,
      files: ['./src/client/**/*.*'],
      ghostMode: {
        clicks: true,
        locations: false,
        forms: true,
        scrolls: true      
      },
  	  injectChanges: false, // ?
  	  logFileChanges: true,
  	  logLevel: 'debug',
  	  logPrefix: 'gulp-patterns',
  	  notify: true,
  	  reloadDelay: 1000
    };
    return browserSync(options);
});