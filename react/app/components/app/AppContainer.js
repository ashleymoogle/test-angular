import {observer} from 'mobx-react'

import './AppContainer.css'

@observer
class AppContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {"bool": false}
    }

    componentDidMount() {
        console.log("Component mounted with props :", this.props)
    }

    render () {
        let {store} = this.props
        console.log(store)
        return (
            <div className={"wrapper"}>
                <button onClick={this.handleClick}>Click me</button>
                <br/>
                <span>{this.state.bool.toString()}</span>
            </div>
        )
    }
    handleClick = () => {
        this.setState({"bool": !this.state.bool})
    }
}

export default AppContainer
