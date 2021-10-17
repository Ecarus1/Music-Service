const CircularDependencyPlugin = require('circular-dependency-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = function () {
    return merge(commonConfig(), {
        mode: 'production',

        output: {
            path: helpers.root('dist'),
            publicPath: './',
            filename: `scripts/[name].[chunkhash].bundle.js`,
            sourceMapFilename: '[file].map',
            chunkFilename: `scripts/[name].[chunkhash].chunk.js`
        },

        module: {
            rules: [
                /**
                 * Extract and compile SCSS files from .src/styles directory to external CSS file
                 */
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'autoprefixer',
                                        ],
                                    ],
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    includePaths: [helpers.root('src', 'styles', 'global')],
                                },
                            },
                        }
                    ],
                    include: [helpers.root('src', 'styles')]
                }
            ]
        },

        optimization: {
            noEmitOnErrors: true,
            // Tell webpack to minimize the bundle using the TerserPlugin
            // Allows you to override the default minimizer by providing
            // a different one or more customized TerserPlugin instances.
            minimize: true,
        },

        plugins: [
            new CircularDependencyPlugin({
                exclude: /([\\\/]node_modules[\\\/])|(ngfactory\.js$)/,
                // add errors to webpack instead of warnings
                failOnError: true,
                // allow import cycles that include an asyncronous import,
                // e.g. via import(/* webpackMode: "weak" */ './file.js')
                allowAsyncCycles: false,
                // set the current working directory for displaying module paths
                cwd: process.cwd(),
            }),

            new MiniCssExtractPlugin({
                filename: `styles/[name].[contenthash].css`,
            }),
        ],
    });
};
