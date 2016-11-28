import React from 'react' // eslint-disable-line
import ReactDOM from 'react-dom'
import ready from 'document-ready-promise'
import {browserHistory} from 'react-router'

import ReactContainer from './components/ReactContainer'
import Store from './store/store.js'
import './components/styles.css'

// Create Store and populate with data
const store = new Store()
store.history = browserHistory

store.init()
    .then(ready)
    .then(() => {
        ReactDOM.render((
            <ReactContainer store={store}/>
        ), document.getElementById('mount'))
    })

window.store = store
