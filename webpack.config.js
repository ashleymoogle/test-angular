const webpack = require('webpack')
const validate = require('webpack-validator')
const path = require('path')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TARGET = process.env.npm_lifecycle_event || 'build'

const developmentConfig = require('./webpack/development')

//Parallel shiet
//var HappyPack = require('happypack');
//var os = require('os');
//var UglifyJsParallelPlugin = require('webpack-uglify-parallel');

//CSS LOADER IS ON 0.14.5 FOR PERF SAKE

let common = {
    entry: {
        app: path.resolve(__dirname, "src"),
    },
    output: {
        path: path.resolve(__dirname, "build/dist"),
        filename:'[name].bundle.js',
        chunkFilename: "[name].bundle.js",
        publicPath: "/build/dist/",
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loaders: ['html'],//happypack/loader?id=html'],
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loaders: ['babel'],//happypack/loader?id=babel'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
                exclude: /node_modules/,
            }
        ]
    },
    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
    ],
    resolve: {
        modulesDirectories: [
            path.resolve('./node_modules'),
        ],
        alias: {
            "lodash": "lodash/lodash.min",
        }
    },
    externals: {
        //"moment": "moment",
    },
    stats: {
    },
    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
        /*new HappyPack({
            id:'html',
            loaders: ['html']
        }),
        new HappyPack({
            id:'babel',
            loaders: ['babel']
        })*/
    ]
}

let config = common

if (TARGET === 'build') {
    config = merge.smart(common, {
        plugins: [
            new webpack.DefinePlugin({
              'process.env': {
                'NODE_ENV': JSON.stringify('production')
              }
            }),
            /*new UglifyJsParallelPlugin({
                workers: os.cpus().length, // usually having as many workers as cpu cores gives good results
                minimize: true,
                mangle: true,
                compress: {
                    warnings: false
                },
                sourceMap: false,
                cache: false,
            }),*/
            /*new webpack.optimize.UglifyJsPlugin({

                minimize:true,
                mangle: true,
                compress: false,
                sourceMap: false,
                cache: false,
            }),*/
            new webpack.optimize.DedupePlugin(),
            new CopyWebpackPlugin([
                {from: 'src/assets', to: '../assets'},
                {from: 'src/index.html', to: '../index.html'}
            ])
            //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
        ]
    })
}

if ((TARGET === 'start') || (TARGET === undefined)) {
    config = merge(common, {
        debug: true,
        plugins: [
          new ProgressBarPlugin({
              format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
              width:200,
              clear: false,
          }),
        ],
        devtool: 'eval'
    })

    config = merge(common, developmentConfig.devServer())
}

module.exports = validate(config)
