export default function mainCtrl($scope, $http, $state) {
    console.log('controller')

    this.items = [
        {
            "name": "Cat",
            "desc": "A cat is a feline"
        },
        {
            "name": "Windows",
            "desc": "Windows is an OS"
        },
        {
            "name": "Goo",
            "desc": "A goo is an unidentified thing made of stuff"
        }
    ]

    this.model = {
        "name": "",
        "desc": ""
    }

    this.addItem = () => {
        console.log('add item')
        this.items.push(this.model)
        this.model = {
            "name": "",
            "desc": ""
        }
    }
}

mainCtrl.$inject = ['$scope', '$http', '$state']