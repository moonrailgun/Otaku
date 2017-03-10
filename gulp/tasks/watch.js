var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');
var gulpsync = require('gulp-sync')(gulp);

gulp.task('watch', gulpsync.sync(
  [
    'clean',
    ['copy', 'sass', 'images', 'webpack']
  ]),function(){
  watch(config.sass.all, function(){  //监听所有sass
    gulp.start('sass');             //出现修改、立马执行sass任务
  });

  watch(config.images.src, function(){  //监听所有image
    gulp.start('images');
  });

  watch([config.base.src + '/*.js', config.base.src + '/**/*.js'], function(){  //监听所有 es6 js
    gulp.start('webpack');
  });

  watch(config.base.src + '/*.html',function(){
    gulp.start('copy');
  });
  watch(config.base.src + '/entry.js',function(){
    gulp.start('copy');
  });
}
);
