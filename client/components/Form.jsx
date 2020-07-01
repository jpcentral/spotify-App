import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updTrgtPlaylists, updTrgtID } from '../actions/index'
import { extractUserURI } from './utils'

import Spotify from 'spotify-web-api-js'
const spotifyApi = new Spotify()

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      handleChange(event) {
        this.setState({value: event.target.value})
      }
    
      handleSubmit(event) {
       const { dispatch } = this.props
       const userID = extractUserURI(this.state.value)
       dispatch(updTrgtID(userID))
       spotifyApi.getUserPlaylists(userID)
          .then(playlists => {
            dispatch(updTrgtPlaylists(playlists))
          })
       event.preventDefault()
      }

    render() {
        return (
            <div className='playlist-header'>
              <div>
          <form onSubmit={this.handleSubmit}>
          <label>Users URI:<input type="text"
          value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
         </form>
         </div>
         </div>
        )
    }
}

export default connect()(Form)
