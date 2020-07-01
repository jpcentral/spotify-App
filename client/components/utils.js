export const extractUserURI = (userURI) => {
    const userID = userURI.replace('spotify:user:', '')
    return userID
  }

  export const extractPlaylistURI = (playlistURI) => {
    const playlistID = playlistURI.replace('spotify:playlist:', '')
    return playlistID
  }

export const extractTrackURI = (trackURI) => {
    const trackID = trackURI.replace('spotify:track:', '')
    return trackID
  }  


export const  getHashParams = () => {
    var hashParams = {}
    var e; var r = /([^&;=]+)=?([^&;]*)/g
    var q = window.location.hash.substring(1)
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2])
    }
    return hashParams
  }

  