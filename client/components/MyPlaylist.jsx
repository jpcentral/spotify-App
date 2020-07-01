import React, { Component } from 'react'
import { connect } from 'react-redux'

import { extractPlaylistURI } from './utils'
import { pushMyURI, filterMyURI } from '../actions/index'

export class MyPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isChecked: false};
        this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox   
    }
    
      handleChecked () {
        this.setState({isChecked: !this.state.isChecked})
      }

      componentDidUpdate() {
        const { tracks, uri, dispatch} = this.props   
        const { isChecked } = this.state
        const id = extractPlaylistURI(uri)
       if (isChecked) {
        dispatch(pushMyURI(id, tracks))
       } else {
        dispatch(filterMyURI(id, tracks))
       } 
      }

    render() {
      const { name, image, tracks, 
        key, uri} = this.props
        return (
            <tr>
                <td><div className='playlist-item'>
                   <img src={image} width='20px'/>
                </div></td>
           <td><div className='playlist-item-name'>{name}
           </div></td>
           <td><div className='playlist-item'>{tracks} Songs
           </div></td>
           <td><div className='playlist-item'>
           <input type="checkbox" onChange={ this.handleChecked }
            id={key} value={uri}>
            </input>
           </div></td>
           </tr>
           )
        }
    }

export default connect()(MyPlaylist)
