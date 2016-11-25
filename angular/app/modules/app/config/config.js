import index from '../main.html'
export default function config($stateProvider, $urlRouterProvider){
    console.log('config')
    $urlRouterProvider.otherwise('/bla')
    $stateProvider
        .state("home", {
            url: "/",
            template: index,
            //templateUrl: "views/main.html",
            controller:"mainCtrl",
            controllerAs: "vm"
            /*resolve: {
                loadModule: ['$ocLazyLoad', function($ocLazyLoad) {
                    return new Promise(function(resolve) {
                        require.ensure([], function(require) {
                            require(['../Module.js'], function (module) {
                                resolve($ocLazyLoad.load({name: 'app.module'}));
                            });
                        }, "Module")
                    });
                }],
            }*/
        })
}

config.$inject = ['$stateProvider', '$urlRouterProvider']
