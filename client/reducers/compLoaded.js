const compLoaded = (state = false, action) => {
    switch (action.type) {
      case 'COMP_LOADED':
        return !state
      default:
        return state
    }
  }
  
  export default compLoaded
  