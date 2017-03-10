var gulp = require('gulp');
var config = require('../config').base;
var assetsConfig = require('../config').assets;

gulp.task('copy', function () {
  gulp.src(config.src + '/*.html')
    .pipe(gulp.dest('./build'));
  gulp.src(config.src + '/entry.js')
    .pipe(gulp.dest('./build'));
  gulp.src(assetsConfig.src)
    .pipe(gulp.dest(assetsConfig.dest));
});
