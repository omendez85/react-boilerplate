const config = require('./gulp/config');

//-----------------------------------
// Create Webpack Aliases Dinamically
//-----------------------------------
// Dependencies
const path = require('path');
const gutil = require('gulp-util');
const glob = require('glob');

// Placeholder for the Aliases
const aliases = {};

// Prefix for all the aliases
const nameSpacePrefix = 'app.';

// Match file extensions
const filesMatch = '/**/*.*(js|jsx)';

// Source Directories for JS Files
const srcFolder = [
  config.paths.src.main + '**/'
];

srcFolder.forEach(function (src) {
  glob.sync(src + filesMatch, {}).forEach(function (file) {
    let directory;
    if ( file.split('/').length > 3) {
      directory = file.split('/');
      directory = `${directory[directory.length - 2]}.`;
    } else {
      directory = ''; 
    }
    console.log(directory)
    aliases[ nameSpacePrefix + directory + path.basename(file, path.extname(file)) ] = path.resolve('./', file);
  });
});

if (Object.keys(aliases).length > 0) {
  gutil.log(gutil.colors.green.bold(`Aliases created: ${ JSON.stringify(aliases, null, 4) }`));
} else {
  gutil.log(gutil.colors.red('Error: No Aliases were found.'));
}

module.exports = aliases;
