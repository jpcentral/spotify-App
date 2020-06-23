import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compareClicked } from '../actions/index'

export class CompareButton extends Component {
    constructor (props) {
        super(props)
        this.state = {
            compareStatus: false
        }
    }
    
    compareFunction = () => {
        const { myURIs, trgtURIs, dispatch } = this.props
        if (myURIs.length > 0 && trgtURIs.length > 0) {
            this.setState({ compareStatus: true })
            dispatch(compareClicked())
    }
}

render() {
    return (
    <div className='footer'>
        <button onClick={() => this.compareFunction() }>
            COMPARE
        </button>{ (this.state.compareStatus) ?
        <p>Success! The above tracks are not in your playlist</p> :
        <p>Please select at least one palylist from each table</p>
        } </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        compBttnClicked : state.compareClicked,
        myURIs : state.myURIs,
        trgtURIs : state.trgtURIs
    }
}


export default connect(mapStateToProps)(CompareButton)
