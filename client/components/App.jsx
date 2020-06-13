import React, { Component } from 'react'
import Spotify from 'spotify-web-api-js'
import { connect } from 'react-redux'
import MyPlaylists from './MyPlaylists'
import Header from './Header'
import TargetPlaylists from './TargetPlaylists'
import CompareButton from './CompareButton'

import { extractUserID } from './utils'
import { getHashParams } from './utils'
import { updLog } from '../actions/index'

const spotifyApi = new Spotify()
let userURI = 'spotify:user:jpsccmb'

class App extends Component {
  constructor (props) {
    super(props)
    const params = getHashParams()
    if (params.access_token) {
      spotifyApi.setAccessToken(params.access_token)
      props.dispatch(updLog(true))
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
        <TargetPlaylists />
        </>}
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
