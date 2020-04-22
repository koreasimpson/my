const path = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const mode = process.env.NODE_ENV || "development"

module.exports = {
	mode,
	entry: {
		"intro/intro": "./src/js/intro.js",
		"main/main": "./src/js/main.js",
		"portfolio/portfolio": "./src/js/portfolio.js"
	},
	output: {
		path: path.resolve(__dirname, "docs"),
		filename: "[name].js"
	},
	devServer: {
		contentBase: path.join(__dirname, "docs"),
		publicPath: "/",
		overlay: true,
		stats: "errors-only"
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.js$/,
				use: ["babel-loader"],
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|svg|gif|JPG)$/,
				loader: "url-loader",
				options: {
					name: "[name].[ext]?[hash]",
					publicPath: "../",
					limit: 10000 // 10Kb
				}
			},
			{
				test: /\.MP4$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]?[hash]",
					publicPath: "../"
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/intro/index.html",
			filename: "index.html",
			chunks: ["intro/intro"]
		}),
		new HtmlWebpackPlugin({
			template: "./public/main/index.html",
			filename: "./main/index.html",
			chunks: ["main/main"]
		}),
		new HtmlWebpackPlugin({
			template: "./public/portfolio/index.html",
			filename: "./portfolio/index.html",
			chunks: ["portfolio/portfolio"]
		}),
		...(mode === "production" ? [new MiniCssExtractPlugin({ filename: "[name].css" })] : [])
	]
}
