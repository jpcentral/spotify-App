const trgtTracks = (state = [], action) => {
    switch (action.type) {
      case 'PUSH_TRGT_TRACK':
          return [
              ...state, action.trgtTrack
              ]
      case 'CLEAR_TRGT_TRACKS':
            return state.filter(x => x !== x)
      default:
        return state
    }
  }
  
  export default trgtTracks
