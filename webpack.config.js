const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const HtmlWebpackPartialsPlugin = require( 'html-webpack-partials-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )

module.exports = {
	entry: ['@babel/polyfill', './src/browser/index.js'],
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'bundle.js'
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'images'
				}
			}
		]
	},
	devServer: {
		port: 8080,
		open: true,
		proxy: {
			'/api': 'http://localhost:3000'
		}
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin( {
			title: 'Eddy',
			filename: 'index.html',
			meta: {
				viewport: 'width=device-width, initial-scale=1'
			},
			base: '/'
		} ),
		new HtmlWebpackPartialsPlugin( {
			path: path.join( __dirname, './src/browser/partials/root.html' )
		} ),
		new MiniCssExtractPlugin( {
			filename: 'bundle.css'
		} )
	]
}