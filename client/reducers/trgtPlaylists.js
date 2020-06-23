const trgtPlaylists = (state = {}, action) => {
    switch (action.type) {
      case 'UPD_TRGT_PLAYLIST':
        return state = action.trgtPlaylists
      case 'CLEAR_TRGT_PLAYLIST':
        return state = {}
      default:
        return state
    }
  }
  
  export default trgtPlaylists
  