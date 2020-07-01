const myTtlTracks = (state = 0, action) => {
    switch (action.type) {
      case 'PUSH_MY_URI':
          return state += action.myURI.tracks
      case 'FILTER_MY_URI':
            return state -= action.myURI.tracks
      default:
        return state
    }
  }
  
  export default myTtlTracks
  