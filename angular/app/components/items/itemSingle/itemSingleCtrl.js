import moment from 'moment'

export default class itemSingle {
    constructor($translate) {
        this.trans = $translate
    }

    $onInit() {
        //this.geniusMethodYay(this.item)
    }

    geniusMethodYay = (args) => {
        console.log(args)
    }
}

itemSingle.$inject = ['$translate']