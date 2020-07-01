const myURIs = (state = [], action) => {
    switch (action.type) {
      case 'PUSH_MY_URI':
          return [
              ...state, action.myURI
              ]
      case 'FILTER_MY_URI':
            return state.filter(x => x.uri !== action.myURI.uri)
      default:
        return state
    }
  }
  
  export default myURIs
  