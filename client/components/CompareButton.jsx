import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pushMyTrack, pushTrgtTrack, compLoaded, loadingSwitch } from '../actions/index'

import Spotify from 'spotify-web-api-js'
const spotifyApi = new Spotify()

export class CompareButton extends Component {
    constructor (props) {
        super(props)
        this.state = {
            compareStatus: false
        }
    }

checkTables = (callback) => {
        const { myURIs, trgtURIs, dispatch } = this.props
        if (myURIs.length > 0 && trgtURIs.length > 0) {
            this.setState({ compareStatus: true })
            dispatch(loadingSwitch())
            callback()
    } this.setState({ compareStatus: false })
}

dispatchTracks = (URIs, ID, action) => {
    const { dispatch } = this.props
    URIs.map(playlist => {
        for (let x = 0; playlist.tracks > x; x += 100) {
        spotifyApi.getPlaylistTracks(ID, playlist.uri, { offset: x })
        .then((data) => {
         data.items.map((items) => {
            const uri = items.track.uri.replace('spotify:track:', '')
            dispatch(action(uri))
        })}, (err) => console.log(err))
    }})}
      
uriAPIcalls = () => {
    const { trgtID, myID, trgtURIs, myURIs, } = this.props
    this.dispatchTracks(myURIs, myID, pushMyTrack)
    this.dispatchTracks(trgtURIs, trgtID, pushTrgtTrack)
}

componentDidUpdate () {
    const { trgtTracks, myTracks, trgtTtlTracks, 
        myTtlTracks, dispatch } = this.props
    if ( trgtTtlTracks !== 0 &&
    trgtTtlTracks === trgtTracks.length &&
    myTtlTracks === myTracks.length ) {
    dispatch(loadingSwitch())
    dispatch(compLoaded())
    }
}

compareFunction = () => {
    this.checkTables(() => {
        this.uriAPIcalls()})
    }

render() {
    return (
    <div className='footer'>
        <button onClick={() => this.compareFunction()}>
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
        myID: state.myID,
        trgtID: state.trgtID,
        compBttnClicked: state.compareClicked,
        myURIs: state.myURIs,
        trgtURIs: state.trgtURIs,
        myTracks: state.myTracks,
        trgtTracks: state.trgtTracks,
        myTtlTracks: state.myTtlTracks,
        trgtTtlTracks: state.trgtTtlTracks
    }
}


export default connect(mapStateToProps)(CompareButton)
