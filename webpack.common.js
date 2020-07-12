module.exports = {
    entry: {
        'polyfill': '@babel/polyfill',
        '地域連携/オレンジシート/js/patient_referral_sheet': './地域連携/オレンジシート/js/src/patient_referral_sheet.js'
        // 'アイセルICT/ライセンス管理/ライセンス申請/js/license_use': './アイセルICT/ライセンス管理/ライセンス申請/js/src/license_use.js'
    },
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
    externals: {
        jquery: 'jQuery'
    },
    performance: { hints: false }
};
