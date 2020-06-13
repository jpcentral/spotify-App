const loggedIn = (state = false, action) => {
    switch (action.type) {
      case 'UPD_LOG':
        state = action.loggedIn
        return state
      default:
        return state
    }
  }
  
  export default loggedIn
  