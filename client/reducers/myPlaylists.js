const myPlaylists = (state = {}, action) => {
  switch (action.type) {
    case 'UPD_MY_PLAYLIST':
      state = action.myPlaylists
      return state
      
    // [...state,
    //     {
    //       myPlaylists: action.myPlaylists
    //     }
    //   ]

    default:
      return state
  }
}

export default myPlaylists
