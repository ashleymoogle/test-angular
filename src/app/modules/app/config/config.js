import index from '../main.html'
export default function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')
    $stateProvider
        .state("home", {
            url: "/",
            template: index,
            controller:"mainCtrl",
            controllerAs: "vm"
        })
}

config.$inject = ['$stateProvide', '$urlRouterProvider']
