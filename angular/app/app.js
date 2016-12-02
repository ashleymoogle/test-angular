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
import {itemSingle} from './components'

import './modules/app/main.css'

const app = angular.module('app', [
    'ui.router',
    'ngRoute',
    'ui.bootstrap',
    'pascalprecht.translate',
    'oc.lazyLoad'
])
    .config(config)
    .run(run)
    .controller('mainCtrl', mainCtrl)
    .component('itemSingle', itemSingle)

export default app
