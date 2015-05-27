var sourcemaps = require('gulp-sourcemaps');
gulp.src([]).pipe(concat('lib.js')).pipe(concat()).pipe(sourcemaps.write('.'))
