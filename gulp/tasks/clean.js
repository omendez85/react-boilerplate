const del = require('del');

const cleanTask = function (gulp, config) {
	return new Promise(function (resolve, reject) {
		del([config.paths.dist.root]).then(paths => {
			console.log('Deleted files and folders:\n', paths.join('\n'));
			resolve();
		})
	})
}

module.exports = cleanTask;