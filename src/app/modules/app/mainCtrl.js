export default function mainCtrl($timeout) {

    //console.log('Sample data')

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
        //This is the ngModel
    }

    this.addItem = () => {
        //Write the method to add an item

        //sample injection use
        $timeout(() => {
            console.log('Item added')
        })
    }
}

mainCtrl.$inject = ['$timeout']