import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import TrgtPlaylist from './TrgtPlaylist'

export class TargetPlaylists extends Component {
    constructor(props) {
        super(props);
      }

    render() {
      const { trgtPlaylists } = this.props
      if (Object.keys(trgtPlaylists).length === 0) {
        return (<Form />)}
        return (
          <div className='my-playlists'>
            <div className='playlist-header'>
              <div><h2>Their Playlists</h2></div>
              </div>
            <table id='playlists'>
            <tbody>
               {trgtPlaylists.items.map(playlist =>
          <TrgtPlaylist
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

const mapStateToProps = (state) => ({
  trgtPlaylists : state.trgtPlaylists
})

export default connect(mapStateToProps)(TargetPlaylists)

