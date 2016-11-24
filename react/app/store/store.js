import {observable, action, computed, reaction} from 'mobx'
import {Promise} from 'es6-promise'
import _ from 'lodash'
import i18n from '../i18n'
import Moment from 'moment'
import toastr from 'toastr'

import axios from 'axios'

export default class Store {

    @observable state = {}

    reactions = {}

    @computed get something () {
        //return
    }

    init = () => {
        // Add a response interceptor
        axios.interceptors.response.use(undefined, (error) => {
            toastr.error(i18n.t('trans.toast_error'))
            return Promise.reject(error)
        })
        //this.start()
        return Promise.resolve()
    }

    confirmPopup = (content, header) => {
        return new Promise((resolve, reject) => {
            this.popupPromise = {resolve, reject, content, header}
        })
    }

    rejectPopupPromise = () => {
        this.popupPromise.reject()
        this.popupPromise = null
    }

    resolvePopupPromise = () => {
        this.popupPromise.resolve()
        this.popupPromise = null
    }
}
