import React, { Component } from 'react'
import Spotify from 'spotify-web-api-js'

const spotifyApi = new Spotify()

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

  searchTrack () {
    spotifyApi.searchTracks('keeshaw becky')
      .then((data) => {
        console.log(data)
        this.setState({
          artist: data.tracks.items[0].name
        })
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
        <button onClick={() => this.searchTrack()}>Search Song</button>
        <div>
          <h1>Your Search Results:</h1>
          <p>{this.state.artist}</p>
        </div>
      </div>
    )
  }
}

export default App
