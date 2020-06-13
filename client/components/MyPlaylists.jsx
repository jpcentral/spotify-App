import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyPlaylist from './MyPlaylist'

import Spotify from 'spotify-web-api-js'
import { extractUserID } from './utils'
import { updMyPlaylists } from '../actions/index'

const spotifyApi = new Spotify()

class MyPlaylists extends Component {
    constructor (props) {
      super(props) 
    }

    componentDidMount() {
        spotifyApi.getMe()
        .then(data => { 
          spotifyApi.getUserPlaylists(extractUserID(data.uri))
          .then(playlists => {
            this.props.dispatch(updMyPlaylists(playlists))
          }, function (err) {
            console.error(err)
          })
          .then(data => console.log(this.props.myPlaylistsData))
         })
    }

render () {
    if (Object.keys(this.props.myPlaylistsData).length === 0) {
        return <div />
    }
    return (
        <div className='my-playlists'>
          <div className='playlist-header'><div><h2>Your Playlists</h2></div></div>
          <table id='playlists'>
          <tbody>
             {this.props.myPlaylistsData.items.map(playlist =>
        <MyPlaylist
          key={playlist.id}
          image={playlist.images[0].url}
          name={playlist.name}
          tracks={playlist.tracks.total}
          uri={playlist.uri}
        /> 
        )}
        </tbody>
        </table>
        </div>
    )
}
}

const mapStateToProps = (state) => {
   return { myPlaylistsData: state.myPlaylists }
}

export default connect(mapStateToProps)(MyPlaylists)
