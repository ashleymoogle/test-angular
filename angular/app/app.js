import angular from 'angular'
import 'angular-ui-router'
import 'angular-route'
import 'angular-ui-bootstrap'
import 'angular-translate'
import 'angular-translate-loader-static-files'
import 'oclazyload'

import config from './modules/app/config/config'
import run from './modules/app/config/run'

import mainCtrl from './modules/app/mainCtrl'
let app = angular.module('app', [
    'ui.router',
    'ngRoute',
    'ui.bootstrap',
    'pascalprecht.translate',
    'oc.lazyLoad'
])
app.config(config)
app.run(run)
app.controller('mainCtrl', mainCtrl)

export default app
