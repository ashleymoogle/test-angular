const webpackConfig = require('./webpack.config.js')
webpackConfig.plugins = webpackConfig.plugins.filter(function (plugin) {
        return !plugin.__KARMA_IGNORE__;
})

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'build/dist/app.bundle.js',
            { pattern: 'test-context.js', watched: false }
        ],
        logLevel: config.LOG_INFO,
        frameworks: ['mocha', 'chai'],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        reporters: ['mocha'],
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
            'karma-chai',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter'
        ]
    })
}
