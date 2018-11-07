const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "src/app/App.js",
    output: {
        path: "src/app/dist",
        filename: "bundle.js",
        publicPath: "/"
    },

    devtool: "source-map",
    devServer: {
        port: 8081,
        quiet: false,
        noInfo: true,
        lazy: true,
        filename: `bundle.js`,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
        },
        publicPath: '/',
        stats: { colors: true },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env",
                            "react"
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
};