const diffTracks = (state = [], action) => {
    switch (action.type) {
      case 'ADD_DIFF_TRACK':
          return [
              ...state, action.track
          ]
      case 'CLEAR_MY_TRACKS':
            return state.filter(x => x !== x)
      default:
        return state
    }
  }
  
  export default diffTracks
