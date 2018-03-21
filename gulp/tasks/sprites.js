const spritesmith = require('gulp.spritesmith');
const assetName = 'sprite.png';

const sprites = function (gulp, config) {

    const spritesProject = gulp.src(config.paths.src.assetsPng + '*.png')
        .pipe(spritesmith({
            imgName: assetName,
            cssName: '_sprite.scss',
            padding: 10,
            imgPath: config.paths.dist.spritePath + assetName,
            cssTemplate: './gulp/templates/handlebarsStr.css.handlebars'
        }));

    const spritesPromise = Promise.all([
        new Promise(function (resolve, reject) {
            spritesProject.img
                .pipe(gulp.dest(config.paths.src.assets))
                .on('end', () => {
                    console.log('Sprite PNG created');
                    resolve();
                })
        }),
        new Promise(function (resolve, reject) {
            spritesProject.css
                .pipe(gulp.dest(config.paths.src.scss + 'sprites/'))
                .on('end', () => {
                    console.log('Sprite SCSS created');
                    resolve();
                })
        }),
    ]);

    return spritesPromise;
}

module.exports = sprites;
