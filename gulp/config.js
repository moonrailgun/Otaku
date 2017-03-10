var src = "./src";
var dest = "./build";

module.exports = {
  base: {
    src: src,
    dest: dest
  },
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
    dest: dest + "/js"
  },
  assets: {
    src: src + "/assets/**/*",
    dest: dest + "/assets"
  },
  clean: {
    src: dest
  }
}
