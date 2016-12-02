import ctrl from './itemSingleCtrl'
import temp from './itemSingle.html'
import './itemSingle.css'

export default {
    bindings: {
        'item':'='
    },
    template: temp,
    controller: ctrl,
    controllerAs: 'vm'
}