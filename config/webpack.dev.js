var commonConfig = require('./webpack.common.js');
var webpackMerge = require('webpack-merge');
var helpers = require('./helpers');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = webpackMerge(commonConfig, {
    //Extra development config

    devtool: 'cheap-module-eval-source-map',

    output: {

        /**
         * The output directory as absolute path (required).
         *
         * See: http://webpack.github.io/docs/configuration.html#output-path
         */
        path: helpers.root('dist'),

        /**
         * Specifies the name of each output file on disk.
         * IMPORTANT: You must not specify an absolute path here!
         *
         * See: http://webpack.github.io/docs/configuration.html#output-filename
         */
        filename: '[name].bundle.js',

        /**
         * The filename of the SourceMaps for the JavaScript files.
         * They are inside the output.path directory.
         *
         * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
         */
        sourceMapFilename: '[name].map',

        /** The filename of non-entry chunks as relative path
         * inside the output.path directory.
         *
         * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
         */
        chunkFilename: '[id].chunk.js'

      },

    plugins: [
        new ExtractTextPlugin("[name].css")
	]

       
});

