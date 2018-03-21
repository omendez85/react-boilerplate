const webpack = require('webpack');
const path = require('path');
const config = require('./gulp/config');
const webpackAliases = require('./webpack.aliases');

module.exports = {
	devtool: 'cheap-eval-source-map',
	target: 'web',
	entry: {
		bundle: config.paths.src.main + 'index.js'
	}, 
	/*optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: config.paths.src.main + 'index.js',
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},*/
	output: {
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.join(__dirname, 'src'),
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}

			}
		]
	},
	resolve: {
		alias: webpackAliases
	},
	plugins: [
		// ensure that we get a production build of any dependencies
		// this is primarily for React, where this removes 179KB from the bundle
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		})
	]
};