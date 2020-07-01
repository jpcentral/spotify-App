import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyPlaylists from './MyPlaylists'
import Header from './Header'
import TrgtPlaylists from './TrgtPlaylists'
import CompareButton from './CompareButton'
import CompPlaylist from './CompPlaylist'

import { getHashParams } from './utils'
import { updLog } from '../actions/index'

import Spotify from 'spotify-web-api-js'
const spotifyApi = new Spotify()

class App extends Component {
  constructor (props) {
    super(props)
    const params = getHashParams()
    if (params.access_token) {
      spotifyApi.setAccessToken(params.access_token)
      props.dispatch(updLog())
  }
}

  render () {
    const { loggedIn, compLoaded, loadingComp } = this.props
    return (
    <>
    { (!loggedIn) && 
      <div className="App">
      <Header />
    </div> }
    { (loggedIn && !compLoaded) && 
    <div className="App">
    <Header />
    <div className='playlists-box'>
      <MyPlaylists />
      <TrgtPlaylists />
      </div>
      <CompareButton />
    </div> }
    { loadingComp && 
    <div className="App">
    <Header />
    <img className='loading-comp' src='loading-gif.gif'/>
    </div> }
    { ( compLoaded ) && 
    <div className="App">
    <Header />
    <CompPlaylist />
    </div> }
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    compLoaded: state.compLoaded,
    loadingComp: state.loadingSwitch
  }
}

export default connect(mapStateToProps)(App)
