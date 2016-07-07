var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.ts']
    },

    // Make sure root is src
    root: helpers.root('src'),

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader'},
            { test: /\.html$/, loader: 'raw-loader' },

            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }

        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'vendor' ].reverse()
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};