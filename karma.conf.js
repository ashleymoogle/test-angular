const webpackConfig = require('./webpack.config.js')
webpackConfig.entry = {}
webpackConfig.plugins = webpackConfig.plugins.filter(function (plugin) {
        return !plugin.__KARMA_IGNORE__;
})

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            { pattern: 'test-context.js', watched: true }
        ],
        logLevel: config.LOG_INFO,
        frameworks: ['mocha'],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        reporters: ['mocha', 'chai'],
        //port: 9876, 3030
        colors: true,
        singleRun: true,
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        mochaReporter: {
            showDiff: true
        },
        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter'
        ]
    })
}
