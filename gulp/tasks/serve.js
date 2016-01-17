

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require('../config.js')();
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var args = require('yargs').argv;

gulp.task('serve', ['build'], function(){
	
	gulp.run('watch');
	
	var isDev = true;
	var port = process.env.PORT || config.defaultport;
	var nodeOptions = {
		script: config.nodeapp, 
		delayTime: 1,
		env: {
			'PORT': port,
			'NODE_ENV': isDev ? 'dev' : 'build'
		},
		watch: [config.nodeapp]		
	};
	
	return nodemon(nodeOptions)
	.on('restart', function(ev){
		gutil.log(gutil.colors.green('*** nodemon restarted...'));
		gutil.log(gutil.colors.green('files changed on restart:\n', ev));
		
		setTimeout(function() {
			browserSync.notify('reloading now...');
			browserSync.reload({stream: false});			
		}, 500);
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
		
		if(browserSync.active) { 
			return; 
		}
		
		var port = process.env.PORT || config.defaultport;
		console.log('starting browser-sync on port ' + port);
		
		var options = {
			proxy: 'localhost:' + port,
			port: 3000,
			browser: config.browser,
			files: ['./src/**/*.ts', './src/**/*.less'],
			ghostMode: {
				clicks: true,
				locations: false,
				forms: true,
				scrolls: true      
			},
			injectChanges: true, // ?
			logFileChanges: true,
			logLevel: 'info',
			logPrefix: 'BROWSER-SYNC: ',
			notify: true,
			reloadDelay: 1000
		};
		return browserSync(options);
		
	}
});