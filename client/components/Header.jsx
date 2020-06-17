import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Header extends Component {
    render() {
        return (
            <div className='header'>
            <div className='header-image'>
                <img src='Playlist comparer logo.png' width='100px'/>
            </div>
            { this.props.loggedIn === false && 
            <div>
            <a href='https://james-spotify-oauth.herokuapp.com/login'>
          <button>Login with Spotify</button>
        </a>
            </div> }
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn
})


export default connect(mapStateToProps)(Header)
