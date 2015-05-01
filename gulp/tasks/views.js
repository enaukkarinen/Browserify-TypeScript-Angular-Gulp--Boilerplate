
var gulp = require('gulp');

// Views task
gulp.task('views', function() {
	// Get our index.html
	gulp.src('src/index.html')
	// And put it in the dist folder
	.pipe(gulp.dest('dist/'));

	// Any other view files from app/views
	gulp.src('./src/views/**/*')
	// Will be put in the dist/views folder
	.pipe(gulp.dest('dist/views/'));
});