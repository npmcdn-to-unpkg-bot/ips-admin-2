const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');

module.exports = {

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts'],

        // Make sure root is src
        root: helpers.root('src'),

        modulesDirectories: ['node_modules']
    },

    module: {
        loaders: [
            { 
                test: /\.ts$/, 
                loaders: ['awesome-typescript-loader','angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/, /node_modules/]
            },
            { 
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [helpers.root('src/index.html')]
            },

            // File loader for supporting images, for example, in CSS files.
            /*{ 
                test: /\.(png|gif|jpg)$/, 
                loader: "file?name=images/[name].[ext]" 
            },*/

            // Standard [inline] CSS loader
            { 
                test: /\.css$/, 
                loaders: ['style-loader', 'css-loader'],
                exclude: [/node_modules/]
            },

            //Finds less files in the global css folder
            {
                test: /css\/.*?\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader'],
                exclude: [/node_modules/]
            },

            //Finds non global less files (assumed to be component less files and loads them as strings)
            {
                test: /^(?:(?!css\/).)*\.less$/,
                loaders: ['to-string-loader', 'css-loader', 'less-loader'],
                exclude: [/node_modules/]
            }

        ]
    },

    plugins: [
        //new webpack.optimize.OccurenceOrderPlugin(true),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor','polyfills']
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'dependency'
        })
    ],

    /*
    * Include polyfills or mocks for various node stuff
    * Description: Node configuration
    *
    * See: https://webpack.github.io/docs/configuration.html#node
    */
    node: {
        global: 'window',
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};