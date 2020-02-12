import React, { Component } from 'react'

const Spotify = require('spotify-web-api-js')
const spotifyApi = new Spotify()

class App extends Component {
  constructor () {
    super()
    const params = this.getHashParams()
    this.state = {
      loggedIn: !!params.access_token,
      searchResults: {
        name: ''
      }
    }

    if (params.access_token) {
      spotifyApi.setAccessToken(params.access_token)
    }
  }

  componentDidMount () {
    const keeshaw = 'keeshaw'
    const track = 'track'
    this.spotifyAPI.search(keeshaw, track)
      .then(response => console.log(response))
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
        <div>Your Search Results:
          <button onClick={() => this.search()}>Get Playlists</button>
        </div>
      </div>
    )
  }
}

export default App
