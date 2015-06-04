

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require('../config.js')();

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
	
	return nodemon(nodeOptions);
	
	
});