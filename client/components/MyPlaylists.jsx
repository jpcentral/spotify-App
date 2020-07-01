import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyPlaylist from './MyPlaylist'

import Spotify from 'spotify-web-api-js'
import { extractUserURI } from './utils'
import { updMyPlaylists, updMyID } from '../actions/index'

const spotifyApi = new Spotify()

export class MyPlaylists extends Component {
    constructor (props) {
      super(props) 
    }

    componentDidMount() {
      const { dispatch } = this.props
        spotifyApi.getMe()
        .then(data => { 
          const uri = extractUserURI(data.uri)
          dispatch(updMyID(uri))
          spotifyApi.getUserPlaylists(uri)
          .then(playlists => {
            dispatch(updMyPlaylists(playlists))
          })
         })
    }

render () {
  const { myPlaylistsData } = this.props
    if (Object.keys(myPlaylistsData).length === 0) {
        return <div />
    }
    return (
        <div className='my-playlists'>
          <div className='playlist-header'>
            <div><h2>Your Playlists</h2></div>
            </div>
          <table id='playlists'>
          <tbody>
             {myPlaylistsData.items.map(playlist =>
        <MyPlaylist
          key={playlist.id}
          image={playlist.images[0].url}
          name={playlist.name}
          tracks={playlist.tracks.total}
          uri={playlist.uri}
        /> )}
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
