import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyPlaylists from './MyPlaylists'
import Header from './Header'
import TrgtPlaylists from './TrgtPlaylists'
import CompareButton from './CompareButton'

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
    return (
      <div className="App">
        <Header />
        <div className='playlists-box'>
        { (!this.props.loggedIn) ? 
       <div></div> : 
        <>
        <MyPlaylists />
        <TrgtPlaylists />
        </> }
        </div>
        <CompareButton />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { loggedIn: state.loggedIn }
}

export default connect(mapStateToProps)(App)
