const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'dist'),
    //     publicPath: '/dist/'
    // }
});
