import angular from 'angular'
import 'angular-ui-router'
import 'angular-route'
import 'angular-ui-bootstrap'

import config from './modules/app/config/config'
import run from './modules/app/config/run'

import mainCtrl from './modules/app/mainCtrl'
import {itemSingle} from './components'

import './modules/app/main.css'

const app = angular.module('app', [
    'ui.router',
    'ngRoute',
    'ui.bootstrap'
])
    .config(config)
    .run(run)
    .controller('mainCtrl', mainCtrll)
    .component('itemSingle', itemSingle)

export default app
