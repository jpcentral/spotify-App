const loadingSwitch = (state = false, action) => {
    switch (action.type) {
      case 'LOADING_SWITCH':
        return !state
      default:
        return state
    }
  }
  
  export default loadingSwitch
  