const copyFont = function (gulp, config) {
    return function () {
        gulp.src(config.paths.src.fonts + '**')
            .pipe(gulp.dest(config.paths.dist.fonts))
    }
}

module.exports.copyFont = copyFont;

const copyAssets = function (gulp, config) {
    return function () {
        gulp.src(config.paths.src.assets + '**')
            .pipe(gulp.dest(config.paths.dist.assets))
    }
}

module.exports.copyAssets = copyAssets;

const copyHtml = function (gulp, config) {
    return function () {
        gulp.src(config.paths.html)
            .pipe(gulp.dest(config.paths.dist.root))
    }
}

module.exports.copyHtml = copyHtml;
