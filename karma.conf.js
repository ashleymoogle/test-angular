const webpackConfig = require('./webpack.config.js')
webpackConfig.entry = {}
module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            { pattern: 'test-context.js', watched: false }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        singleRun: true,
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ]
    })
}
