const trgtTtlTracks = (state = 0, action) => {
    switch (action.type) {
      case 'PUSH_TRGT_URI':
          return state += action.trgtURI.tracks
      case 'FILTER_TRGT_URI':
            return state -= action.trgtURI.tracks
      default:
        return state
    }
  }
  
  export default trgtTtlTracks
  