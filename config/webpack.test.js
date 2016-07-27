module.exports = {
    resolve: {
        extensions: ['', '.js', '.ts']
    },

    devtool: 'cheap-module-eval-source-map',

    module: {
        loaders: [
            { test: /\.ts$/, exclude: /node_modules/, loader: 'awesome-typescript-loader'},
            { test: /\.html$/, exclude: /node_modules/, loader: 'raw-loader' },

            // Extract css files
            {
                test: /\.css$/,
                loader: 'null'
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: 'null'
            }
        ]
    }
};
