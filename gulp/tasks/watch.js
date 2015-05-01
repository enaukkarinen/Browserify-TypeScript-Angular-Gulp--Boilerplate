var gulp = require('gulp');
    
gulp.task('watch', ['lint'], function() {
  // Watch our scripts
  gulp.watch(['src/*.js', 'app/scripts/**/*.js'],[
    'lint',
    'browserify'
  ]);
});
