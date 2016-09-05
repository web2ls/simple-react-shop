var webpack = require('webpack');

module.exports = {
	entry: './src/core.jsx',
	output: {
		path: __dirname + '/public/build/',
		publicPath: 'build/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: ['/node_modules/','/public/'],
				query: {presets: ['es2015']}
			},
			{
				test: /\.jsx$/,
				loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
				exclude: ['/node_modules/','/public/']
				/*query: {presets: ['es2015', 'react']}*/
			},
			{
				test: /\.css$/,
				loader: 'css-loader!style-loader!autoprefixer-loader',
				exclude: ['/node_modules/','/public/']
			},
			{
				test: /\.gif$/,
				loader: 'url-loader?limit=10000&mimetype="image/gif'
			},
			{
				test: /\.jpg$/,
				loader: 'url-loader?limit=10000&mimetype="image/jpg'
			},
			{
				test: /\.png$/,
				loader: 'url-loader?limit=10000&mimetype="image/png'
			},
			{
				test: /\.svg$/,
				loader: 'url-loader?limit=26000&mimetype="image/svg'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	}
}