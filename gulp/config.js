var src = "./src";
var dest = "./build";

module.exports = {
  sass: {
    all: src + "/sass/**/*.scss",
    src: src + "/sass/*.scss",
    dest: dest + "/css",
    settings: {}
  },
  images: {
    src: src + "/img/**/*",
    dest: dest + "/img"
  },
  js: {
    src: src + "/js/**/*",
    dest: dest + "js"
  },
  clean:{
    src: dest
  }
}
