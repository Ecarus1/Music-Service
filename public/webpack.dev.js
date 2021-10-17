const EvalSourceMapDevToolPlugin = require('webpack/lib/EvalSourceMapDevToolPlugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = function () {
    return merge(commonConfig(), {
        mode: 'development',

        output: {
            path: helpers.root('dist'),
            filename: '[name].bundle.js',
            chunkFilename: '[id].chunk.js'
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'tslint-loader',
                            options: {
                                configFile: helpers.root('tslint.json')
                            }
                        }
                    ],
                    include: [helpers.root('src')]
                },
            ]
        },

        plugins: [
            new EvalSourceMapDevToolPlugin({
                moduleFilenameTemplate: '[resource-path]',
                sourceRoot: 'webpack:///'
            }),
        ],

        devServer: {
            // https: true,
            disableHostCheck: true,
            contentBase: helpers.root('src/'),
            open: true,
            proxy: {
                // [`${configLib.PROXY_PATH}**`]: {
                //     target: METADATA.API_URL,
                //     secure: false,
                //     changeOrigin: true,
                //     pathRewrite: {
                //         [`^${configLib.PROXY_PATH}`]: ''
                //     }
                // }
            },
            port: 7375,
            historyApiFallback: true,
            watchOptions: {
                // if you're using Docker you may need this
                // aggregateTimeout: 300,
                // poll: 1000,
                ignored: /node_modules/
            },
            stats: 'minimal',
        },
    });
};
