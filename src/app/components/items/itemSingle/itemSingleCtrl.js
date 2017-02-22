import moment from 'moment'

export default class itemSingle {
    constructor($translate) {
        this.trans = $translate
    }

    onInit() {
        //ne s'affiche pas, pourquoi ?
        this.method(this.item)
    }

    method = (args) => {
        console.log(args)
    }
}

itemSingle.$inject = ['$translate']