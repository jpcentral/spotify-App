export const extractUserID = (userURI) => {
    const userID = userURI.replace('spotify:user:', '')
    return userID
  }

export const extractPlaylistID = (userURI) => {
    const userID = userURI.replace('spotify:playlist:', '')
    return userID
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

  