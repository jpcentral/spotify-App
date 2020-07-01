import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DiffTrack extends Component {
    constructor (props) {
        super(props) 
      }

    render() {
        const { uri, image, name, artist,
             duration, previewURL, url } = this.props
        return (
        <tr>
            <td><div className='playlist-item'>
                   <img src={image} width='20px'/>
                </div></td>
           <td><div className='playlist-item-name'>{name}
           </div></td>
           <td><div className='playlist-item'>{artist}
           </div></td>
           <td><div className='playlist-item'>{duration}ms
           </div></td>
           <td><div className='playlist-item'>PLAY
           </div></td>
           </tr>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(DiffTrack)
