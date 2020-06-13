import React, { Component } from 'react'
import { connect } from 'react-redux'

export const MyPlaylist = (props) => {
    const { name, image, tracks, key, uri } = props
    return (
            <tr>
           <td>
               <div className='playlist-item'>
                   <img src={image} width='20px'/>
                </div> 
           </td>
           <td>
           <div className='playlist-item'>{name}
           </div>
           </td>
           <td>
           <div className='playlist-item'>{tracks} Songs
           </div>
           </td>
           <td>
           <div className='playlist-item'>
           <input type="checkbox" id={key} value={uri}></input>
           </div>
           </td>
           </tr>
    )
}

const mapStateToProps = (state) => ({
     myPlaylistsData: state.myPlaylists 
})

export default connect(mapStateToProps)(MyPlaylist)
