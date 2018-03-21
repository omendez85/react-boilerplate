'use-strict';

module.exports = {
    paths: {
        html: 'src/index.html',
        app: './dist/',
        webpackConfig: '../../webpack.config.js',
        src: {
            main: './src/',
            assets: './src/assets/',
            svgIcons: './src/svg-icons/',
            assetsPng: './src/assets_png/',
            fonts: './src/fonts/',
            scss: './src/sass/',
            js: './src/js/'
        },
        dist: {
            root: './dist/',
            css: './dist/css',
            js: './dist/js',
            assets: './dist/assets',
            spritePath: '/dist/assets/',
            fonts: './dist/fonts',
            fontPathCss: '/content/dam/usaa-fonts/'
        }
    },
    server: {
        port: 3000,
        host: 'localhost',
        path: 'dist'
    }
};
