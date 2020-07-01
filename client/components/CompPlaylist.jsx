import React, { Component } from 'react'
import { connect } from 'react-redux'
import DiffTrack from './DiffTrack'

import { pushDifference, addDiffTrack } from '../actions/index'

import Spotify from 'spotify-web-api-js'
const spotifyApi = new Spotify()

export class CompPlaylist extends Component {

componentDidMount () {
        const { myTracks, trgtTracks, dispatch } = this.props
        const difference = trgtTracks.filter(x => !myTracks.includes(x))
        dispatch(pushDifference(difference))
    }

componentDidUpdate () {
    const { difference, dispatch } = this.props
    for (let x = 0; difference.length > x; x += 50) {
        const fiftyTracks = difference.filter((uri, index) => index < x + 50 && index >= x)
        spotifyApi.getTracks(fiftyTracks)
        .then((data) => {
            console.log(data.tracks[0]),
            data.tracks.map(track => {
                dispatch(addDiffTrack({
                    uri: track.uri,
                    image: track.album.images[0],
                    name: track.name,
                    artist: track.artist,
                    duration: track.duration_ms,
                    previewURL: track.preview_url, 
                    url: track.external_urls.spotify
                }))}),
            (err) => console.log(err)
            })
    }
}

    render() {
        const { diffTracks } = this.props
        return (
            <div className='difference-playlist'>
                <div className='playlist-header'>
            <div><h2>Different Tracks</h2></div>
            </div>
                <table id='diffTracks'>
                    <tbody>
                { diffTracks.map((track, ind) =>
                <DiffTrack
                key={ind}
                uri={track.uri}
                image={track.image}
                name={track.name}
                artist={track.artist}
                duration={track.duration}
                previewURL={track.previewURL} 
                url={track.url}
                />
                )}
                </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    trgtTracks: state.trgtTracks,
    myTracks: state.myTracks,
    difference: state.difference,
    diffTracks: state.diffTracks
})

export default connect(mapStateToProps)(CompPlaylist)
