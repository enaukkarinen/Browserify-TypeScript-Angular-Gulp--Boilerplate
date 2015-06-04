

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require('../config.js')();
var gutil = require('gulp-util');
var browserSync = require('browser-sync');

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
		startBrowserSync();
	})
	.on('crash', function(){
		gutil.log(gutil.colors.red('*** NODEMON CRASHED: script crashed for some reason.'));
	})
	.on('exit', function(){
		gutil.log(gutil.colors.magenta('*** nodemon exited cleanly...'));
	});
	
	function startBrowserSync(){
		
		console.log(browserSync.isActive);
		if(browserSync.isActive){ return; }
		
		var port = process.env.PORT || config.defaultport;
		console.log('starting browser-sync on port ' + port);
		
		var options = {
			proxy: 'localhost:' + port,
			port: 3000,
			browser: 'firefox',
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
		
	}
});