import moment from 'moment'

export default class itemSingle {
    constructor($translate) {
        console.log(this.item)
        this.trans = $translate
        //console.log(this.geniusMethodYay("yolo"))
    }

    geniusMethodYay = (args) => {
        console.log(args)
    }
}

itemSingle.$inject = ['$translate']