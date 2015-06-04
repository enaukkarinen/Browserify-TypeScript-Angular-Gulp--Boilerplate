

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require('../config.js')();
var gutil = require('gulp-util');

gulp.task('serve', function(){
	console.log(config.defaultport);
	console.log(config.nodeapp);
	console.log(config.server);
	var isDev = true;
	var port = process.env.PORT || config.defaultport;
	var nodeOptions = {
		script: config.nodeapp, 
		delayTIme: 1,
		env: {
			'PORT': port,
			'NODE_ENV': isDev ? 'dev' : 'build'
		},
		watch: [config.server] 
		
	};
	
	return nodemon(nodeOptions)
	.on('restart', function(ev){
		gutil.log(gutil.colors.green('*** nodemon restarted...'));
		gutil.log(gutil.colors.green('files changed on restart:\n', ev));
	})
	.on('start', function(){
		gutil.log(gutil.colors.cyan('*** nodemon started...'));
	})
	.on('crash', function(){
		gutil.log(gutil.colors.red('*** NODEMON CRASHED: script crashed for some reason.'));
	})
	.on('exit', function(){
		gutil.log(gutil.colors.magenta('*** nodemon exited cleanly...'));
	});
	
	
});