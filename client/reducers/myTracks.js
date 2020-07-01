const myTracks = (state = [], action) => {
    switch (action.type) {
      case 'PUSH_MY_TRACK':
          return [
              ...state, action.myTrack
              ]
      case 'CLEAR_MY_TRACKS':
            return state.filter(x => x !== x)
      default:
        return state
    }
  }
  
  export default myTracks
