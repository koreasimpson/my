const path = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const mode = process.env.NODE_ENV || "development"

module.exports = {
	mode,
	entry: {
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
				test: /\.(png|jpg|svg|gif|jpeg|JPG)$/,
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
			template: "./public/main/index.html",
			filename: "index.html",
			templateParameters: {
				path: process.env.NODE_ENV === "production" ? "/my" : null
			},
			minify:
				process.env.NODE_ENV === "production"
					? {
							collapseWhitespace: true, // 빈 공간(들여쓰기,띄어쓰기,줄바꿈) 제거
							removeComments: true // 주석 제거
					  }
					: false,
			chunks: ["main/main"]
		}),
		new HtmlWebpackPlugin({
			template: "./public/portfolio/index.html",
			templateParameters: {
				path: process.env.NODE_ENV === "production" ? "/my" : null
			},
			filename: "./portfolio/index.html",
			minify:
				process.env.NODE_ENV === "production"
					? {
							collapseWhitespace: true, // 빈 공간(들여쓰기,띄어쓰기,줄바꿈) 제거
							removeComments: true // 주석 제거
					  }
					: false,
			chunks: ["portfolio/portfolio"]
		}),
		...(mode === "production"
			? [new CleanWebpackPlugin(), new MiniCssExtractPlugin({ filename: "[name].css" })]
			: [])
	]
}
