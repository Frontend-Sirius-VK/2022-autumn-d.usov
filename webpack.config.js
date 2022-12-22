const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/Frontend/script.js',

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
	},
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.handlebars$/, loader: 'handlebars-loader' },
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{ test: /\.(png|jpeg)$/, type: 'asset/resource' },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/Frontend/index.html',
			favicon: './src/Frontend/sources/images/favicon.png',
		}),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: {
		proxy: {
			'/api': 'http://127.0.0.1:3000',
		},
		historyApiFallback: true,
	},
};
