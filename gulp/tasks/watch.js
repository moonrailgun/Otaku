var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');

gulp.task('watch', ['sass', 'images', 'webpack'], function(){
  watch(config.sass.all, function(){  //监听所有sass
    gulp.start('sass');             //出现修改、立马执行sass任务
  });

  watch(config.images.src, function(){  //监听所有image
    gulp.start('images');
  });

  watch(config.base.src, function(){  //监听所有 es6 js
    gulp.start('webpack');
  });

  // watch(config.js.src, function(){  //监听所有js
  //   gulp.start('js');
  // });
})
