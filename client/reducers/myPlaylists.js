const myPlaylists = (state = {}, action) => {
  switch (action.type) {
    case 'UPD_MY_PLAYLIST':
      return state = action.myPlaylists
    default:
      return state
  }
}

export default myPlaylists
