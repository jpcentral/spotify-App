export const updMyPlaylists = (playlists) => {
  return {
    type: 'UPD_MY_PLAYLIST',
    myPlaylists: playlists
  }
}

export const updLog = (boolean) => {
  return {
    type: 'UPD_LOG',
    loggedIn: boolean
  }
}
