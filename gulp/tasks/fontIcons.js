const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const fontName = 'usaa-font';
const fontClass = 'usaa-icon';

const fontIcons = function (gulp, config) {
    return new Promise(function (resolve, reject) {
        gulp.src([config.paths.src.svgIcons + '*.svg'])
            .pipe(iconfontCss({
                fontName: fontName,
                targetPath: '../sass/fonts/_icons.scss',
                fontPath: config.paths.dist.fontPathCss,
                cssClass: fontClass,
            }))
            .pipe(iconfont({
                fontName: fontName, // required
                formats: ['ttf', 'eot', 'woff', 'woff2'],
                normalize: true,
                fontHeight: 1000,
            }))
            .on('glyphs', function (glyphs, options) {
                console.log(glyphs);
            })
            .pipe(gulp.dest(config.paths.src.fonts))
            .on('end', resolve)
    })
}

module.exports = fontIcons;
