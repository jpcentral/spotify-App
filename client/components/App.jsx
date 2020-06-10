import React, { Component } from 'react'
import Spotify from 'spotify-web-api-js'

const spotifyApi = new Spotify()
let userURI = 'spotify:user:jpsccmb'

class App extends Component {
  constructor () {
    super()
    const params = this.getHashParams()
    this.state = {
      loggedIn: !!params.access_token,
      artist: ''
    }

    if (params.access_token) {
      spotifyApi.setAccessToken(params.access_token)
    }
  }

  extractUserID(userURI) {
    const userID = userURI.replace('spotify:user:', '')
    return userID
  }

  getUserPlaylists(userURI) {
    spotifyApi.getUserPlaylists(this.extractUserID(userURI))
      .then((data) => {
        data.items.map(x =>  {
          let playlistNames = x.name
          let playlistURI = x.id
          console.log('name: ', playlistNames, 'id: ', playlistURI)
         } )    
        console.log(data)
      }, function (err) {
        console.error(err)
      })
  }

  getHashParams () {
    var hashParams = {}
    var e; var r = /([^&;=]+)=?([^&;]*)/g
    var q = window.location.hash.substring(1)
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2])
    }
    return hashParams
  }

  render () {
    return (
      <div className="App">
        <a href='http://localhost:8888'>
          <button>Login with Spotify</button>
        </a>
        <button onClick={() => {
        this.getUserPlaylists(userURI)
        console.log(userURI)
      }
        }>Search Users Playlists</button>
        <div>
          <h1>Your Search Results:</h1>
          <p>{this.state.artist}</p>
        </div>
      </div>
    )
  }
}

export default App
