import React, { Component } from 'react'
import { connect } from 'react-redux'

import { extractPlaylistID } from './utils'
import { pushTrgtURI, filterTrgtURI } from '../actions/index'

export class TargetPlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {isChecked: false}
        this.handleChecked = this.handleChecked.bind(this)
    }
    
      handleChecked () {
        this.setState({isChecked: !this.state.isChecked})
      }

    render() {
        const { name, image, tracks, 
            key, uri, dispatch } = this.props   
        const { isChecked } = this.state
       if (isChecked) {
           const id = extractPlaylistID(uri)
           dispatch(pushTrgtURI(id))
       } else {
           const id = extractPlaylistID(uri)
           dispatch(filterTrgtURI(id))
       } 
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

export default connect()(TargetPlaylist)

