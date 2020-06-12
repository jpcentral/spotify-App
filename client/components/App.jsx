import React, { Component } from 'react'
import Spotify from 'spotify-web-api-js'
import { connect } from 'react-redux'

import { extractUserID } from './utils'
import { getHashParams } from './utils'
import { updMyPlaylists } from '../actions/index'
import myPlaylists from '../reducers/myPlaylists'


const spotifyApi = new Spotify()
let userURI = 'spotify:user:jpsccmb'

class App extends Component {
  constructor (props, myPlaylistsData) {
    super(props, myPlaylistsData)
    const params = getHashParams()
    this.state = {
      loggedIn: !!params.access_token,
    }

    if (params.access_token) {
      spotifyApi.setAccessToken(params.access_token)
      spotifyApi.getMe()
      .then(data => { 
        spotifyApi.getUserPlaylists(extractUserID(data.uri))
        .then(playlists => {
          props.dispatch(updMyPlaylists(playlists))
        })
        .then(data => console.log(this.props.myPlaylistsData))
       })
  }
}

  getUserPlaylists(userURI) {
    spotifyApi.getUserPlaylists(extractUserID(userURI))
      .then((data) => {
        data.items.map(x =>  {
          let playlistNames = x.name
          let playlistURI = x.id
          console.log('name: ', playlistNames, 'id: ', playlistURI)
         } )    
      }, function (err) {
        console.error(err)
      })
  }

  render () {
    return (
      <div className="App">
        { (!this.state.loggedIn) ? 
        <a href='http://localhost:8888'>
          <button>Login with Spotify</button>
        </a> : 
        <div>Logged In</div>}
        <button onClick={() => {
        this.getUserPlaylists(userURI)
      }}> Search Users Playlists </button>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { myPlaylistsData: state.myPlaylists }
}

export default connect(mapStateToProps)(App)
