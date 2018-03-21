const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sassGlobbing = require('node-sass-globbing');
const sassUnicode = require('gulp-sass-unicode');

const styles = function (gulp, config) {
  return function () {
    gulp.src([
      config.paths.src.scss + 'main.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      precision: 14,
      outputStyle: 'expanded',
      importer: sassGlobbing
    }))
    .pipe(sassUnicode())
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.dist.css));
  }
}

const stylesMin = function (gulp, config) {
  return function () {
    gulp.src([
      config.paths.src.scss + 'main.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      importer: sassGlobbing
    }))
    .pipe(sassUnicode())
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.dist.css))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(config.paths.dist.css));
  }
}

module.exports.styles = styles;
module.exports.stylesMin = stylesMin;
