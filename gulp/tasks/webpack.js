const webpack = require('webpack');
const gulpWebpack = require('gulp-webpack');

const webpackTask = function (gulp, config) {
	return function () {
		gulp.src('')
			.pipe(gulpWebpack(require(config.paths.webpackConfig), webpack))
			.pipe(gulp.dest(config.paths.dist.js));
	}
}

module.exports = webpackTask;
