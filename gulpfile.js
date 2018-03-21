const gulp = require('gulp');
const connect = require('gulp-connect');
const config = (process.argv[2] === 'build:prod') ? require('./gulp/config-prod') : require('./gulp/config') ;

gulp.task('styles', require('./gulp/tasks/scss').styles(gulp, config));

gulp.task('stylesMin', require('./gulp/tasks/scss').stylesMin(gulp, config));

gulp.task('server', require('./gulp/tasks/server').server(gulp, connect, config));

gulp.task('reloadSite', require('./gulp/tasks/server').reloadSite(gulp, connect, config));

gulp.task('webpack', require('./gulp/tasks/webpack')(gulp, config));

gulp.task('copyAssets', require('./gulp/tasks/copy').copyAssets(gulp, config));

gulp.task('copyFont', require('./gulp/tasks/copy').copyFont(gulp, config));

gulp.task('copyHtml', require('./gulp/tasks/copy').copyHtml(gulp, config));

gulp.task('eslint', require('./gulp/tasks/eslint')(gulp, config));

gulp.task('watch', function () {
    gulp.watch(config.paths.src.scss + '**/*.scss', ['styles', 'reloadSite']);
    gulp.watch([config.paths.src.main + '**/*.js', config.paths.src.main + '**/*.jsx'], ['eslint', 'webpack', 'reloadSite']);
    gulp.watch(config.paths.src.assets + '**/*.*', ['copyAssets', 'reloadSite']);
    gulp.watch(config.paths.html, ['copyHtml', 'reloadSite']);
});

function getAsyncTask() {
    return [
        require('./gulp/tasks/clean')(gulp, config),
        require('./gulp/tasks/fontIcons')(gulp, config),
        require('./gulp/tasks/sprites')(gulp, config),
    ]
}

gulp.task('createFontSprite', function () {
    return Promise.all(getAsyncTask());
});

gulp.task('build:prod', function () {
    return Promise.all( 
            getAsyncTask())
        .then(function () {
            gulp.start(['copyHtml', 'copyAssets', 'copyFont', 'stylesMin', 'eslint', 'webpack']);
        });
});

gulp.task('default', ['copyHtml', 'copyAssets', 'copyFont', 'styles', 'eslint', 'webpack', 'server', 'watch']);
