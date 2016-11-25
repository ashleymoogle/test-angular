export default function mainCtrl($scope, $http, $state) {
    console.log('controller')
    $scope.goTest = () => {
        console.log('hello')
    }
}

mainCtrl.$inject = ['$scope', '$http', '$state']