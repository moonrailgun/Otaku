var gulp = require('gulp');

gulp.task('default', ['clean'], function(){
  gulp.start('copy', 'sass', 'images', 'webpack');
});
