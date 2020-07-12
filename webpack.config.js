const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => ({
    // mode: 'development',
    // mode: 'production',
    entry: {
        'polyfill': '@babel/polyfill',
        // 'kintone-create-edit-show': './src/kintone-create-edit-show.js',
        // 'kintone-create-edit-submit': './src/kintone-create-edit-submit.js',
        // "index": "./src/index.js",
        // "test": "./src/test.js",
        'patient_referral_sheet': './地域連携/オレンジシート/js/src/patient_referral_sheet.js'
    },
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env"
                            ]
                        ]
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new TerserPlugin({
    //             terserOptions: {
    //                 ecma: 6,
    //                 compress: { drop_console: true }
    //             }
    //         })
    //     ]
    // },
    devtool: 'inline-source-map',
    externals: {
        jquery: 'jQuery'
    },
    watch: true,
    performance: { hints: false }
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin()
    // ]
});
