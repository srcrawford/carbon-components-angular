var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractText = require("extract-text-webpack-plugin");
var nodeExternals = require('webpack-node-externals');
var path = require('path');

module.exports = [{
	devtool: "source-map",
	entry: {
		demo: "./demo/main.ts",
	},
	output: {
		path: __dirname + "/demo",
		filename: "[name].js",
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: ["angular2-template-loader", "awesome-typescript-loader"]
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.min\.css$/,
				loader: ExtractText.extract({
					fallbackLoader: "style-loader",
					loader: "css-loader"
				})
			},
			{
				test: /[^\.min]\.css$/,
				loader: "raw-loader"
			},
			{
				test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader : 'file-loader'
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js", ".json"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './demo/index.html'
		}),
		new ExtractText("styles.css")
	],
	devServer: {
		contentBase: "./demo",
		port: 9000
	}
}];