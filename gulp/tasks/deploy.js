var gulp = require('gulp');

gulp.task('deploy', ['clean'], function(){
    // gulp.start('sass', 'imagemin', 'uglify');
    gulp.start('sass', 'imagemin', 'copy', 'webpack');
});
