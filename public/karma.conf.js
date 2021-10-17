const testWebpackConfig = require('./webpack.dev.js')({env: 'test'});

module.exports = function (config) {
    config.set({
        /**
         * Base path that will be used to resolve all patterns (e.g. files, exclude).
         */
        basePath: '.',

        /**
         * Frameworks to use
         *
         * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
         */
        frameworks: ['jasmine'],

        /**
         * List of files to exclude.
         */
        exclude: [],

        /**
         * List of files / patterns to load in the browser
         *
         * we are building the test environment in ./spec-bundle.js
         */
        files: [
            {pattern: './spec-bundle.js', watched: false},
        ],

        /**
         * Preprocess matching files before serving them to the browser
         * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
         */
        preprocessors: {
            // add webpack as preprocessor
            'spec-bundle.js': ['webpack']
        },

        /**
         * Test results reporter to use
         *
         * possible values: 'dots', 'progress'
         * available reporters: https://npmjs.org/browse/keyword/karma-reporter
         */
        reporters: ['mocha'],

        /**
         * Webpack Config at ./webpack.test.js
         */
        webpack: testWebpackConfig,

        /**
         * Webpack please don't spam the console when running in karma!
         */
        webpackMiddleware: {
            /**
             * webpack-dev-middleware configuration
             * i.e.
             */
            noInfo: true,
            /**
             * and use stats to turn off verbose output
             */
            stats: {
                /**
                 * options i.e.
                 */
                chunks: false
            }
        },

        /**
         * enable / disable colors in the output (reporters and logs)
         */
        colors: true,

        /**
         * Level of logging
         * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         */
        logLevel: config.LOG_WARN,

        /**
         * enable / disable watching file and executing tests whenever any file changes
         */
        autoWatch: false,

        /**
         * start these browsers
         * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: [
            'ChromeHeadless',
        ],

        customLaunchers: {
            ChromeHeadless: {
                base: 'Chrome',
                flags: ['--headless', '--remote-debugging-port=9222']
            }
        },

        /**
         * Continuous Integration mode
         * if true, Karma captures browsers, runs the tests and exits
         */
        singleRun: true,
    })
};
