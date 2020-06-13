import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TargetPlaylists extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
            <div>
                <div className='playlist-header'>
                    <div>
                    <form onSubmit={this.handleSubmit}>
        <label>
          Users URI:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
                    </div>
            </div>
            </div>
        )
    }
}

// const getUserPlaylists = (userURI) => {
//     spotifyApi.getUserPlaylists(extractUserID(userURI))
//       .then((data) => {
//         data.items.map(x =>  {
//           let playlistNames = x.name
//           let playlistURI = x.id
//           console.log('name: ', playlistNames, 'id: ', playlistURI)
//          } )    
//       }, function (err) {
//         console.error(err)
//       })
//   }

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(TargetPlaylists)

