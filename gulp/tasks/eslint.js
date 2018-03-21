const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');

function fixedEslint(file) {
    return file.eslint !== null && file.eslint.fixed; 
}

const estlintTask = function (gulp, config) {
    return function () {
        gulp.src([config.paths.src.js + '**','!node_modules/**'])
            // eslint() attaches the lint output to the "eslint" property
            // of the file object so it can be used by other modules.
            .pipe(eslint())
            // eslint.format() outputs the lint results to the console.
            // Alternatively use eslint.formatEach() (see Docs).
            .pipe(eslint.format())
            // To have the process exit with an error code (1) on
            // lint error, return the stream and pipe to failAfterError last.
            .pipe( gulpIf(fixedEslint, gulp.dest(config.paths.src.js)))

            //.pipe(eslint.failAfterError());
    }
}

module.exports = estlintTask;
