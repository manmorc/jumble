const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dist = 'dist/';

module.exports = {
    mode: 'development',
    entry: './App.js',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
                babelrc: true
            }
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }, {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap' ]
        }, {
            test: /\.png$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                mimetype: 'image/png'
            }
        }, {
            test: /\.ttf$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                mimetype: 'application/octet-stream'
            }
        }, {
            test: /\.svg$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                mimetype: 'image/svg+xml'
            }
        }]
    },
    resolve: {
        modules: [
            'src',
            'node_modules'
        ],
        extensions: ['.json', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, dist),
        filename: 'bundle.js',
        publicPath: dist
    },
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    plugins: [
        new CleanWebpackPlugin([dist])
    ]
};
