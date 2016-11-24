import React from 'react'
import {observer} from 'mobx-react'

import {I18nextProvider} from 'react-i18next'
import i18n from '../i18n'

import { Router, Route } from 'react-router'

@observer
class ReactContainer extends React.Component {

    createElement = (Component, props) => {
        return <Component store={this.props.store} {...props} />
    }

    render () {
        let {store} = this.props
        const routes = [
            <Route path="/test" component={(props) => <div>TEST</div>}/>,
            <Route path="/" component={(props) => <div>MAIN</div>}/>,
            <Route path="*" component={(e) => { console.log('unhandled route', e.routeParams.splat); return null }} />
        ]

        return (
            <I18nextProvider i18n={i18n}>
                <Router
                    history={store.history}
                    createElement={this.createElement}
                    routes={routes}/>
            </I18nextProvider>
        )
    }
}

export default ReactContainer
