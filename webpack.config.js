var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular', 'angular-ui-router', 'angular-resource']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }],
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js" })
    ]
};