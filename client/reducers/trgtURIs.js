const trgtURIs = (state = [], action) => {
    switch (action.type) {
      case 'PUSH_TRGT_URI':
          return [
              ...state, action.trgtURI
              ]
      case 'FILTER_TRGT_URI':
        return state.filter(x => x !== action.trgtURI)
      default:
        return state
    }
  }
  
  export default trgtURIs